import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';

const DatabaseConnection = {
    getConnection: () => SQLite.openDatabase("test.db"),
};
const db = DatabaseConnection.getConnection();

const useDatabase = () => {
    const [userList, setUserList] = useState([]);
    const [userById, setUserbyId] = useState(null)

    useEffect(() => {
        createTable()
    }, []);

    useEffect(() => {
        getAllUser();
    }, [userList]);
    const createTable = () => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
                [],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, firstname VARCHAR(20), lastname VARCHAR(20), phone INT(10), date DATE(), email VARCHAR(255))',
                            []
                        );
                    }
                }
            );
        });
    }
    const getAllUser = () => {
        let temp = []
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user',
                [],
                (tx, results) => {
                    for (let i = 0; i < results.rows.length; ++i)
                        temp.push(results.rows.item(i));
                    setUserList(temp)
                }
            );
        });
    }

    const addUser = (user) => {
        let userArray = [user.firstname, user.lastname, user.phone, user.date, user.email]
        db.transaction(function (tx) {
            tx.executeSql(
                'INSERT INTO table_user (firstname, lastname, phone, date, email) VALUES (?,?,?,?,?)',
                userArray,
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        getAllUser();
                    } else alert('Erro ao tentar Registrar o Usuário !!!');
                }, (err) => {
                    console.log(err)
                }
            );
        });
    };

    const deleteUser = (Id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM  table_user where user_id=?',
                [Id],
                (tx, results) => {
                    if (results.rowsAffected > 0) {
                        getAllUser()
                    } else {
                        alert('Por favor entre com um código de usuário válido !');
                    }
                }
            );
    });
    };
    const getUserById = (id) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM table_user where user_id = ?',
                [id],
                (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        console.log(results.rows.item(0))
                        setUserbyId(results.rows.item(0))
                    } else {
                        alert('Usuário não encontrado !');
                    }
                }
            );
        });
    };
    const updateUser = (user) => {
        let userArray = [user.firstname, user.lastname, user.phone, user.date, user.email, user.user_id]
        const updateQuery = 'UPDATE table_user SET firstname = ?, lastname = ?, phone = ?, date = ?, email = ? WHERE user_id = ?';
        db.transaction(tx => {
            tx.executeSql(
                updateQuery,
                userArray,
                (_, { rowsAffected }) => {
                    if (rowsAffected > 0) {
                        getAllUser()
                    } else {
                        console.log('No rows updated');
                    }
                },
                (_, error) => {
                    console.log('Error updating row:', error);
                }
            );
        });
    };

    return {
        addUser,
        userList,
        deleteUser,
        userById,
        getUserById,
        updateUser
    };
}
export default useDatabase

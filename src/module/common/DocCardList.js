import UseUtility from "./hook/UseUtility";
import OpcDocCard from "./OpcDocCard";

const DocCardList = () => {
    let doc = [1, 2, 4, 4, 6, 7, 8, 9, 0, , 656, 56, 5, 65, 65, 6, 56, 3, 1];

    return (
        <>
            {
                doc.map((item, i) => {
                    return <OpcDocCard key={i} />
                })
            }
        </>
    )
};

export default DocCardList
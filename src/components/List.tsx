import { type CandidateProps } from "../pages/Search";

type ListProps = {
  candidates: CandidateProps[];
};

function List({ candidates }: ListProps) {
  return (
    <div className="list-container">
      {candidates.map((candidate, index) => {
        return (
          <div key={index}>
            <p>名前: {candidate.firstName}</p>
            <p>メール: {candidate.email}</p>
            <p>身長: {candidate.height}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;

import "./card.css";

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="about">
        <img className="avatar" src= {data?.avatar_url} />
        <div className="credentials">
          <span className="name">{data?.name}</span>
          <span className="user">{data?.login}</span>
        </div>
        <span className="date"> {data?.created_at}</span>
      </div>
      <div className="social">
        <div className="item">
          <span>Repository</span>
          <span>{data?.public_repos}</span>
        </div>
        <div className="item">
          <span>Followers</span>
          <span>{data?.followers}</span>
        </div>
        <div className="item">
          <span>Following</span>
          <span>{data?.following}</span>
        </div>
      </div>

      <div className="footer">
        <span className="location">{data?.location}</span>
        <span className="link">
            <a href={data?.url}>gihub.com</a>
        </span>
      </div>
    </div>
  );
}

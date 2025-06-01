// 1. Pass in {user} and destructure data. Create parent div, img & <a> divs. 
// Declare created date var & render <p> (below <a>) to display it.

// 2. Make a div + <p><span> for each: followers, following & public repos.

const UserCard = ({user}) => {
	const {
		avatar_url,
		followers,
		following,
		public_repos,
		name,
		login,
		created_at,
	} = user;

	const createdDate = new Date(created_at);

	return (
		<div className="flex flex-col items-center gap-4 text-2xl text-center">
			<div>
				<img src={avatar_url} alt={name || login} className="rounded-full w-[12rem]" />
			</div>
			<div>
				<a href={`https://github.com/${login}`}>{name || login}</a>
				<p>
					User joined on{" "}
					{`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {month: "short",})}
          				${createdDate.getFullYear()}
          `				}
				</p>
			</div>
			<div>
				<p>Public Repos: </p>
				<span>{public_repos}</span>
			</div>
			<div>
				<p>Followers: </p>
				<span>{followers}</span>
			</div>
			<div>
				<p>Following: </p>
				<span>{following}</span>
			</div>
		</div>
	);
};

export default UserCard;

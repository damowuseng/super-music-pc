import Discover from '../pages/discover';
import Friend from '../pages/friend';
import My from '../pages/my';

const routes = [
	{
		path: "/",
		exact: true,
		component: Discover
	},
	{
		path: "/my",
		component: My
	},
	{
		path: "/friend",
		component: Friend
	}
];


export default routes

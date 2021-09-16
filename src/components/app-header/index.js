import React, { memo } from 'react';
import {NavLink} from "react-router-dom";

export default memo(function AppHeader() {
	return (
			<div>
				<NavLink to="/">发现音乐</NavLink>
				<NavLink to="/my">我的音乐</NavLink>
				<NavLink to="/discover">发现音乐</NavLink>
			</div>
			
	)
})

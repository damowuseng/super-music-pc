import React, { memo } from 'react';
import { NavLink } from "react-router-dom";
import { Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons'

import { HeaderLeft, HeaderRight, HeaderWrapper } from './style';
import { headerLinks } from '../../services/local-data';

export default memo(function AppHeader() {

	const showSelectItem = (item, index) => {
		if(index < 3) {
			return(
				<NavLink to={item.link} exact>
					{item.title}
					<i className="sprite_01 icon"></i>
				</NavLink>
			)
		}else {
			return(
				<a href={item.link}>
					{item.title}
					
				</a>
				)
		}
	}


	return (
			<HeaderWrapper>
			  <div className="content wrap-v1">
					<HeaderLeft>
						<a href="/" className="logo sprite_01">网易云音乐</a>
						<div className= "select-list">
							{
								headerLinks.map((item, index) => {
									return (
										<div className="select-item" key={index}>
										{showSelectItem(item, index)}
									</div>
									)
								})
							}
						</div>
					</HeaderLeft>
					<HeaderRight>
						<Input className="search" placeholder="音乐" prefix={<SearchOutlined/>}></Input>
						<div className="center">创造者中心</div>
						<div>登录</div>
					</HeaderRight>
				</div>
			  <div className="divider"></div>
			</HeaderWrapper>
			
	)
})

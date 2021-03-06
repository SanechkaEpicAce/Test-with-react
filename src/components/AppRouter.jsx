import React from 'react'
import Error from '../pages/Error'
import Posts from '../pages/Posts'
import About from '../pages/About'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import PostIdPage from '../pages/PostIdPage'


const AppRouter = () => {
	return(
		<Switch>
			<Route path="/about">
				<About/>
			</Route>
			<Route exact path="/posts">
				<Posts/>
			</Route>
			<Route exact path="/posts/:id">
				<PostIdPage/>
			</Route>
			<Route path="/error">
				<Error/>
			</Route>
			<Redirect to='/error' />
		</Switch>
	)
}


export default AppRouter;
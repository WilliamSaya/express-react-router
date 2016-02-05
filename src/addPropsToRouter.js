/**
 * @flow
 */
import React from 'react';

/**
 * Add props to a the top level component when a route is rendered.
 *
 * @param router	{ReactRouter}	The react-router <Router /> element to add props to
 * @param props		{Object}		The props to add the rendered componet
 *
 * @return			{ReactRouter}	The router that will add props to the rendered coponet
 */
export default function addPropsToRouter(router: ReactRouterRoute, props: Object): ReactRouterRoute {
	const createElement = (Component, reactRouterProps) => {
		return <Component {...props} {...reactRouterProps} />;
	};

	return React.cloneElement(router, { createElement });
}

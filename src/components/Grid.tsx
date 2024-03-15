import React from 'react';

const Grid = ({ children }: { children: React.ReactNode }) => {

	return (
		<div className="grid">
			{children}
		</div>
	);
}

export default Grid
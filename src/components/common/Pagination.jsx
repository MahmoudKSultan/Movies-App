import React from "react";
import "./Pagination.css";
function Pagination({ setPage }) {
	const pageNumber = 10;
	const arr = Array.from(Array(pageNumber).keys());
	return (
		<div className="pagination">
			<ul>
				{arr.map((number) => {
					return (
						<li key={number} onClick={() => setPage(number + 1)}>
							{number + 1}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Pagination;

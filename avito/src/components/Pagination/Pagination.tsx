interface PaginationProps {
	adPerPage: number;
	totalAds: number;
	paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ adPerPage, totalAds, paginate }) => {
	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(totalAds / adPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="paginaion">
			{
				pageNumbers.map(number => (
					<li key={number} onClick={() => paginate(number)}>
						{number}
					</li>
				))
			}
		</ul>
	);
}

export default Pagination;
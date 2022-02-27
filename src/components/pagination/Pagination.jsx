import ReactPaginate from 'react-paginate';
import Searching from '../searching/Searching';
import { PaginationContainer, PaginationMobil, PaginationPc, Info, InfoBold } from './pagination.elements';

const Pagination = ({ info, page, setPage, isNext, isPreviousData, dataLength, isFetching }) => {
    return (
        <PaginationContainer>
            <PaginationMobil>
                <button
                    onClick={() => setPage(old => Math.max(old - 1, 1))}
                    disabled={page === 1} className="btn-paginate-mobil"
                >
                    Previous
                </button>
                <button
                    onClick={() => { setPage(old => (isNext ? old + 1 : old)) }}
                    disabled={isPreviousData || !isNext} className="btn-paginate-mobil"
                >
                    Next
                </button>
            </PaginationMobil>
            <PaginationPc>
                <div>
                    <Info>
                        Showing
                        <InfoBold>
                            {dataLength * page - (dataLength - 1)}
                        </InfoBold>
                        to
                        <InfoBold>
                            {isNext ? (dataLength * page) : info?.count}
                        </InfoBold>
                        of
                        <InfoBold>
                            {info?.count}</InfoBold>
                        results
                    </Info>
                </div>
                {
                    // Since the last page's data potentially sticks around between page requests,
                    // we can use `isFetching` to show a background loading
                    // indicator since our `status === 'loading'` state won't be triggered
                    // TODO: add a spinner Loading... Example: https://tailwindcomponents.com/component/full-page-overlay-loading-screen
                    isFetching
                        ? <Searching />
                        : null
                }
                <div>
                    <ReactPaginate
                        className='paginate'
                        previousClassName='btn-paginate btn-paginate-prev'
                        nextClassName='btn-paginate btn-paginate-next'
                        pageClassName='btn-paginate-page'
                        breakClassName='btn-paginate-break'
                        activeClassName='btn-paginate-active'
                        onPageChange={({ selected }) => setPage(selected + 1)}
                        pageCount={Math.ceil(info?.pages)}
                    />
                </div>
            </PaginationPc>
        </PaginationContainer>
    )
}

export default Pagination
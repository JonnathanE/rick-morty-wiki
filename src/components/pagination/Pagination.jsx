import ReactPaginate from 'react-paginate';
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
                    {
                        // Since the last page's data potentially sticks around between page requests,
                        // we can use `isFetching` to show a background loading
                        // indicator since our `status === 'loading'` state won't be triggered
                        // TODO: add a spinner Loading... Example: https://tailwindcomponents.com/component/full-page-overlay-loading-screen
                        isFetching
                            ? <div class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
                                <span class="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0" style={{top: '50%'}}>
                                    <i class="fas fa-circle-notch fa-spin fa-5x"></i>
                                </span>
                            </div>
                            : null
                    }
                </div>
            </PaginationPc>
        </PaginationContainer>
    )
}

export default Pagination
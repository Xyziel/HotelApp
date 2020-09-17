import React from "react";
import axios from "axios/index"
import ReactPaginate from 'react-paginate'
import '../../styles/css/admin/AdminPanel.css'
import AdminPanelNavbar from "./AdminPanelNavbar";



class AdminPanelReservations extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            offset: 0,
            data: [],
            perPage:5,
            currentPage:0
        };

        this.handlePageClick = this
            .handlePageClick
            .bind(this);


    }

    handlePageClick(e)
    {
        const selectedPage=e.selected;
        const offset = selectedPage*(this.state.perPage);

        this.setState({
            currentPage: selectedPage,
            offset:offset
        },()=>{
            this.getData()
        })
    }

    componentDidMount()
    {
        this.getData();
    }

    getData()
    {
        axios.get("http://localhost:8080/reservations/all").
        then(res=>
            {
                console.log(res.data);
                // console.log(res.data._embedded.reservations[0]);
                // const data=res.data._embedded.reservations;
                // const slice=data.slice(this.state.offset,this.state.offset+this.state.perPage);
                const postData = res.data.map(pd => <React.Fragment>
                    <div className="d-flex flex-row">
                        <p className="col">{pd.reservationId}</p>
                        <p className="col">{pd.dateFrom}</p>
                        <p className="col">{pd.dateTo}</p>
                        <p className="col">{pd.user.userName}</p>
                        <p className="col">{pd.user.lastName}</p>
                        <p className="col">{pd.room.number}</p>
                        <p className="col">{pd.room.standard.name}</p>
                        <button className="col btn-xsm btn-dark h-25" onClick={()=>this.deleteReservation(pd.reservationId)}>Delete</button>
                    </div>
                </React.Fragment>);
                this.setState({
                    pageCount: Math.ceil(res.data.length/this.state.perPage),postData
                });
            },
            e=>{console.log(e)});
    }

    deleteReservation(id)
    {
        console.log(id);
        const url="http://localhost:8080/reservations?reservationId="+id;
        axios.delete(url);

    }


    renderAdminNaviationBar()
    {
        return <AdminPanelNavbar></AdminPanelNavbar>;
    }

    render()
    {
        return (
            <div>
                {this.renderAdminNaviationBar()}
                <div className="d-flex flex-row">
                    <p className="col">ID</p>
                    <p className="col">Rezerwacja od</p>
                    <p className="col">Rezerwacja do</p>
                    <p className="col">Imie</p>
                    <p className="col">Nazwisko</p>
                    <p className="col">Numer pokoju</p>
                    <p className="col">Standard</p>
                    <p className="col">Usuń</p>
                </div>
                <hr style={{visibility:"hidden"}}/>
                {this.state.postData}
                <div className="row pageDiv">
                    <ReactPaginate
                        className="page"
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                </div>
            </div>);

    }
}




export default  AdminPanelReservations;
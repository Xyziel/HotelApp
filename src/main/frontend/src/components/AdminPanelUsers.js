import React from "react";
import axios from "axios"
import ReactPaginate from 'react-paginate'
import '../styles/css/AdminPanel.css'
import AdminPanelNavbar from "./AdminPanelNavbar";



class AdminPanelUsers extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            offset: 0,
            data: [],
            perPage:2,
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
        axios.get("http://localhost:8080/dao/users").
        then(res=>
            {
                console.log(res.data._embedded.users[0]);
                const data=res.data._embedded.users;
                const slice=data.slice(this.state.offset,this.state.offset+this.state.perPage);
                const postData = slice.map(pd => <React.Fragment>
                    <div className="d-flex flex-row">
                        <p className="col ">{pd.email}</p>
                        <p className="col">{pd.userName}</p>
                        <p className="col">{pd.firstName}</p>
                        <p className="col">{pd.lastName}</p>
                        <p className="col">{pd.phoneNumber}</p>
                        <p className="col">{pd.role_id}</p>
                        <button className="col btn-xsm btn-dark h-25" onClick={()=>this.deleteUser(pd.userName)}>Delete</button>
                    </div>
                </React.Fragment>);
                this.setState({
                    pageCount: Math.ceil(data.length/this.state.perPage),postData
                });
            },
            e=>{console.log(e)});
    }

    deleteUser(userName)
    {
        const url="http://localhost:8080/api/users" + "?userName=" + userName;
        console.log(url);
        axios.delete(url,userName)
            .then(res=>{
                console.log(res.data)
            },e=>{
                console.log(e)
            })
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
                    <p className="col">Email</p>
                    <p className="col">Nazwa</p>
                    <p className="col">Imie</p>
                    <p className="col">Nazwisko</p>
                    <p className="col">Numer telefonu</p>
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




export default  AdminPanelUsers;
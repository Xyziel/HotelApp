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
            currentPage:0,
            admin: ['admin','client','cook','receptionist']
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
        axios.get("http://localhost:8080/getUserRole").then(
            res=>{
                if(res.data!=='admin')
                {
                    window.location.replace("http://localhost:3000/");
                }
            },e=>{
                // console.log(e);
            }
        );
        this.getData();
    }

    //nie wiem czemu state sie nie zmienia, do przerobienia jesli pojawiloby sie wiecej rol
    // getAllRoles()
    // {
    //     var roles;
    //     return axios.get("http://localhost:8080/api/roles/role/all").
    //     then(res=>
    //         {
    //             roles=res.data;
    //             console.log(roles[0]['name']);
    //             console.log(roles.length);
    //             var adminTemp=[];
    //             for(var i=0;i<roles.length;i++)
    //             {
    //                 adminTemp[i]=roles[i]['name'];
    //             }
    //             return adminTemp;
    //         },
    //         e=>
    //         {
    //             console.log(e);
    //         }
    //     );
    //
    // }

    test(number)
    {
        var temp=this.state.admin.length-1;

        if(number>=temp)
        {
            number=0;
        }
        else
        {
            number=number+1;
        }

        return this.state.admin[number];
    }

    getData()
    {
        axios.get("http://localhost:8080/api/users/getAllUsers").
        then(res=>
            {
                // console.log(res.data._embedded.users[0]);
                // console.log(res.data);
                // const data=res.data._embedded.users;
                const data=res.data;
                const slice=data.slice(this.state.offset,this.state.offset+this.state.perPage);
                const postData = slice.map(pd => <React.Fragment>
                    <div className="d-flex flex-row">
                        <p className="col ">{pd.email}</p>
                        <p className="col">{pd.userName}</p>
                        <p className="col">{pd.firstName}</p>
                        <p className="col">{pd.lastName}</p>
                        <p className="col">{pd.phoneNumber}</p>
                        <select id="select">
                                <option>{pd.role.name}</option>
                                <option>{this.test(pd.role.roleId-1)}</option>
                                <option>{this.test(pd.role.roleId)}</option>
                                <option>{this.test(pd.role.roleId+1)}</option>
                        </select>
                        <button className="col btn-xsm btn-blue h-25" onClick={()=>this.updateUserRole(pd.userName,document.querySelector('#select'))}>Update</button>
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

    updateUserRole(userName,role)
    {
        function findValue(temp)
        {
            return temp===role.value;
        }

        var roleValue=this.state.admin.findIndex(findValue)+1;
        console.log(roleValue);
        const url="http://localhost:8080/api/users/updateUserRole" + "?userName=" + userName + "&role=" + roleValue;
        axios.patch(url).then(
            res=>{
                console.log(res);
            },e=>{
                console.log(e);
            }
        )
    }

    renderAdminNavigationBar()
    {
        return <AdminPanelNavbar></AdminPanelNavbar>;
    }

    render()
    {
        return (
            <div>
                {this.renderAdminNavigationBar()}
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
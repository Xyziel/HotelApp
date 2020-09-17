import React from "react";
import axios from "axios/index"
import ReactPaginate from 'react-paginate'
import '../../styles/css/admin/AdminPanel.css'
import AdminPanelNavbar from "./AdminPanelNavbar";
import Select from 'react-select';



class AdminPanelUsers extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            offset: 0,
            data: [],
            perPage:5,
            currentPage:0,
            admin: ['admin','client','cook','receptionist'],
            selectId:0,
            selectIdTable:[],
            selectedRole:{}
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
        // console.log(temp);
        // console.log(number);

        if(number===0)
        {
            number=1;
        }
        else if((number-3)%3<0)
        {
            number=number+1;
        }
        else
        {
            number=number%3;
        }
        // console.log(number);
        return this.state.admin[number];
    }

    getData()
    {
        axios.get("http://localhost:8080/api/users/getAllUsers").
        then(res=>
            {
                // console.log(res.data._embedded.users[0]);
                console.log(res.data);
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
                        <div className="col">
                            <select id={this.getSelectId()} onChange={(e)=>{this.handleChange(e,pd.userName)}} autoFocus={true}>
                                    <option>{pd.role.name}</option>
                                    <option>{this.test(pd.role.roleId-1)}</option>
                                    <option>{this.test(pd.role.roleId)}</option>
                                    <option>{this.test(pd.role.roleId+1)}</option>
                            </select>
                        </div>
                        {/*<button className="col btn-xsm btn-blue h-25" onClick={()=>this.updateUserRole(pd.userName,document.querySelector('#'+{this.state.selectId}))}>Update</button>*/}
                        <button className="col btn-xsm btn-primary h-25" onClick={()=>this.updateUserRole(pd.userName,this.state.selectedRole)}>Update</button>
                        <button className="col btn-xsm btn-dark h-25" onClick={()=>this.deleteUser(pd.userName)}>Delete</button>
                    </div>
                </React.Fragment>);
                this.setState({
                    pageCount: Math.ceil(data.length/this.state.perPage),postData
                });
            },
            e=>{console.log(e)});
    }

    handleChange(event,userName)
    {
        // console.log(userName);
        // console.log(event.target.value);
        // console.log(event.target.id);
        this.state.selectedRole[userName]=event.target.value;
        // console.log(this.state.selectedRole);
    }

    getSelectId()
    {
        if(this.state.selectId>this.state.perPage)
        {
            this.setState({selectId:0});
        }
        else
        {
            this.setState({selectId:this.state.selectId+1});
        }
        // console.log(this.state.selectId);
        return 'select-'+this.state.selectId;
    }



    deleteUser(userName)
    {
        const url="http://localhost:8080/api/users" + "?userName=" + userName;
        // console.log(url);
        axios.delete(url,userName)
            .then(res=>{
                console.log(res.data)
            },e=>{
                console.log(e)
            })
    }

    updateUserRole(userName,role)
    {
        var role2=role[userName];
        // console.log(role2);
        // console.log(userName);
        // console.log(this.state.selectId);
        // console.log(role2);
        function findValue(temp)
        {
            return temp===role2;
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
                <div className="d-flex flex-row pt-5 ">
                    <p className="col">Email</p>
                    <p className="col">Username</p>
                    <p className="col">First name</p>
                    <p className="col">Last name</p>
                    <p className="col">Phone number</p>
                    <p className="col">Role/Select role</p>
                    <p className="col">Update role</p>
                    <p className="col">Delete user</p>
                </div>
                <hr style={{visibility:"hidden"}}/>
                {this.state.postData}
                <hr style={{visibility:"hidden"}}/>
                <hr style={{visibility:"hidden"}}/>
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
                <hr style={{visibility:"hidden"}}/>
            </div>);

    }
}




export default  AdminPanelUsers;
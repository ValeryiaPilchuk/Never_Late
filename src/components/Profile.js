import React from 'react'
import './Profile.css';

export default function Profile() {
    return(
       <div className="container bootstrap snippets bootdey">

<div className="row ng-scope">
    <div className="col-md-4">
        <div className="panel panel-default">
            <div className="panel-body text-center">
                <div className="pv-lg"><img className="center-block img-responsive img-circle img-thumbnail thumb96" src="https://i.redd.it/1krwuhtbr7a71.jpg" alt="Contact"/></div>
                <h3 className="m0 text-bold">Patrick Star</h3>
                <div className="mv-lg">
                    <p>Freshman</p>
                    <p>3rd year student</p>
                    <p>Undecided</p>
                    <p>Ready to learn</p>
                </div>
            </div>
        </div>
        <div className="panel panel-default hidden-xs hidden-sm">
            <div className="panel-heading">
                <div className="panel-title text-center">Enrolled In</div>
            </div>
            <div className="panel-body">
                <div className="media">
                    <div className="media-left media-middle">
                        <img alt="image1" className="media-object img-circle img-thumbnail thumb48" src="https://external-preview.redd.it/IqMKJvPNfvnuKMqE16CvCM--btJpr6pcZ32wtXvnssY.jpg?auto=webp&s=29fc97533ffd3e4adb5e889cc545700810bf4996" />
                    </div>
                    <div className="media-body pt-sm">
                        <div className="text-bold">Clarinet Practice
                            <div className="text-sm text-muted">Professor Squidward</div>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div className="media-left media-middle">
                        <img alt="image2" className="media-object img-circle img-thumbnail thumb48" src="https://images.gamebanana.com/img/ico/sprays/5f804891da197.png"/>
                    </div>
                    <div className="media-body pt-sm">
                        <div className="text-bold">Petrology
                            <div className="text-sm text-muted">Dr. Rock</div>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div className="media-left media-middle">
                        <img alt="image3" className="media-object img-circle img-thumbnail thumb48" src="https://lh3.googleusercontent.com/proxy/aT9L0UqWG_c_Aiogpc8USYwKTcaZ7hUL4b7wVMXWryiqWyl1wb8UKZYL5MEJOzc9w30RxO2CNWwFmhqUyZgx7735KqnT0fdHWm0sYNCkD5AL6y5U" />
                    </div>
                    <div className="media-body pt-sm">
                        <div className="text-bold">Add class
                            <div className="text-sm text-muted"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-8">
        <div className="panel panel-default">
            <div className="panel-body">
                <div className="pull-right">
                        <ul className="dropdown-menu dropdown-menu-right animated fadeInLeft" role="menu">
                            <li><a href="#"><span>Send by message</span></a></li>
                            <li><a href="#"><span>Share contact</span></a></li>
                            <li><a href="#"><span>Block contact</span></a></li>
                            <li><a href="#"><span className="text-warning">Delete contact</span></a></li>
                        </ul>
                </div>
                <div className="h4 text-center">Profile Setup</div>
                <div className="row pv-lg">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <form className="form-horizontal ng-pristine ng-valid">
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="inputContact1">Name</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="inputContact1" type="text" placeholder="Patrick Star" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="inputContact2">Email</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="inputContact2" type="email" placeholder="pstar123@ccny.cuny.edu"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="inputContact3">Mobile</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="inputContact3" type="text" placeholder="(123) 465 789"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="inputContact5">Website</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="inputContact5" type="text" placeholder="https://bbhosted.cuny.edu/"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="inputContact6">Username</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="inputContact6" type="text" placeholder = "Star.Patrick"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 control-label" for="inputContact7">Password</label>
                                <div className="col-sm-10">
                                    <input className="form-control" id="inputContact7" type="text" placeholder="PatrickIzTheStar"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button className="btn btn-info" type="submit">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
}

import React from 'react'
import './Profile.css';

export default function Profile() {
    return(
       <div class="container bootstrap snippets bootdey">

<div class="row ng-scope">
    <div class="col-md-4">
        <div class="panel panel-default">
            <div class="panel-body text-center">
                <div class="pv-lg"><img class="center-block img-responsive img-circle img-thumbnail thumb96" src="https://i.redd.it/1krwuhtbr7a71.jpg" alt="Contact"/></div>
                <h3 class="m0 text-bold">Patrick Star</h3>
                <div class="mv-lg">
                    <p>Freshman</p>
                    <p>3rd year student</p>
                    <p>Undecided</p>
                    <p>Ready to learn</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default hidden-xs hidden-sm">
            <div class="panel-heading">
                <div class="panel-title text-center">Enrolled In</div>
            </div>
            <div class="panel-body">
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#"><img class="media-object img-circle img-thumbnail thumb48" src="https://external-preview.redd.it/IqMKJvPNfvnuKMqE16CvCM--btJpr6pcZ32wtXvnssY.jpg?auto=webp&s=29fc97533ffd3e4adb5e889cc545700810bf4996" /></a>
                    </div>
                    <div class="media-body pt-sm">
                        <div class="text-bold">Clarinet Practice
                            <div class="text-sm text-muted">Professor Squidward</div>
                        </div>
                    </div>
                </div>
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#"><img class="media-object img-circle img-thumbnail thumb48" src="https://images.gamebanana.com/img/ico/sprays/5f804891da197.png"/></a>
                    </div>
                    <div class="media-body pt-sm">
                        <div class="text-bold">Petrology
                            <div class="text-sm text-muted">Dr. Rock</div>
                        </div>
                    </div>
                </div>
                <div class="media">
                    <div class="media-left media-middle">
                        <a href="#"><img class="media-object img-circle img-thumbnail thumb48" src="https://lh3.googleusercontent.com/proxy/aT9L0UqWG_c_Aiogpc8USYwKTcaZ7hUL4b7wVMXWryiqWyl1wb8UKZYL5MEJOzc9w30RxO2CNWwFmhqUyZgx7735KqnT0fdHWm0sYNCkD5AL6y5U" /></a>
                    </div>
                    <div class="media-body pt-sm">
                        <div class="text-bold">Add class
                            <div class="text-sm text-muted"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8">
        <div class="panel panel-default">
            <div class="panel-body">
                <div class="pull-right">
                        <ul class="dropdown-menu dropdown-menu-right animated fadeInLeft" role="menu">
                            <li><a href=""><span>Send by message</span></a></li>
                            <li><a href=""><span>Share contact</span></a></li>
                            <li><a href=""><span>Block contact</span></a></li>
                            <li><a href=""><span class="text-warning">Delete contact</span></a></li>
                        </ul>
                </div>
                <div class="h4 text-center">Profile Setup</div>
                <div class="row pv-lg">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-8">
                        <form class="form-horizontal ng-pristine ng-valid">
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact1">Name</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact1" type="text" placeholder="Patrick Star" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact2">Email</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact2" type="email" placeholder="pstar123@ccny.cuny.edu"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact3">Mobile</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact3" type="text" placeholder="(123) 465 789"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact5">Website</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact5" type="text" placeholder="https://bbhosted.cuny.edu/"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact6">Username</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact6" type="text" placeholder = "Star.Patrick"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="inputContact7">Password</label>
                                <div class="col-sm-10">
                                    <input class="form-control" id="inputContact7" type="text" placeholder="PatrickIzTheStar"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button class="btn btn-info" type="submit">Update</button>
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

import React,{ Component } from 'react';
import './login.css';
class Login extends Component {
    render(){
        return (
            <div>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center ">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section">صفحه ورود</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-lg-10">
                                <div className="wrap d-md-flex">
                                    <div className="img" style={{ backgroundImage: 'url(vira.jpg)' }}>
                                    </div>
                                    <div className="login-wrap p-4 p-md-5">
                                        <div className="d-flex">
                                            <div className="w-100">
                                                <h3 className="mb-4 text-right">ورود</h3>
                                            </div>
                                        </div>
                                        <form action="#" className="signin-form">
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="name">نام کاربری</label>
                                                <input type="text" className="form-control" placeholder="نام کاربری" required />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="label" htmlFor="password">رمز عبور</label>
                                                <input type="password" className="form-control" placeholder="رمز عبور" required />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="form-control btn btn-primary rounded submit px-3">ورود</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Login
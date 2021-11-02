import React ,{useState} from "react";

const Contact = () => {
    const [val, setVal] = useState({
        name:'',
        email:'',
        phone:'',
        massege:''
    })

    const inputEvent = (event) =>{
        const {name , value} = event.target;
        
        setVal((old)=>{
            return {
            ...old,
            [name]:value
        }

        })

    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`
        Name = ${val.name}
        Email = ${val.email}
        Phone = ${val.phone}
        Massege = ${val.massege}
        `);

        setVal((old)=>{
            return {
                name:'',
                email:'',
                phone:'',
                massege:''
            }
        })
    }
  return (
    <>
      <div className="container-fluid nav-bg container_home">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="text-center">
              <h1>Contact Us</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 col-12 mt-5">
                <form onSubmit={formSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={val.name}
                      onChange={inputEvent}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={val.email}
                      onChange={inputEvent}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="+9198980000"
                      value={val.phone}
                      onChange={inputEvent}
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Massege
                    </label>
                    <textarea
                      name="massege"
                      class="form-control"
                      value={val.massege}
                      onChange={inputEvent}
                      placeholder="Typing Massege Here ..."
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

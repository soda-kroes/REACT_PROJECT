import {Table,Button,Modal,Form} from 'react-bootstrap';
import axios from "axios";
import { useEffect, useState } from "react";


const CategoryPage = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState({});
  const [show, setShow] = useState(false);
  const [showForm,setShowForm] = useState(false);

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [status,setStatus] = useState(""); 


  // react hook = form load
  useEffect(() => {
    getList();
  }, []);

  const OnDelete = () => {
    setShow(false);
    var category_id = item.category_id;
    axios({
      url: server + "category/" + category_id,
      method: "delete",
    })
      .then(res => {
        var data = res.data;
        //remove recode in cleint
        var tmp_data = list.filter((item) => item.category_id !== category_id);
        setList(tmp_data);
      })
      .catch(err => {
        console.log(err);
      });
  };

   // -------------------------------------- for handle event --------------------------------
  const OnClickBtnDelete = param => {
    setItem(param);
    setShow(true);
  };

  const OnHideModal = () => {
    setShow(false);
    setItem({});
  };

  const OnHideModalForm = () =>{
        setShowForm(false);
        setItem({});
  }
  const OnClearForm = () =>{
    setName("");
    setDescription("");
    setStatus("");
  }


  const OnSave = () =>{
    OnHideModalForm()
    const param = {
      "name" : name,
      "description": description,
      "parent_id": null,
      "status": status
    }

    var url = server+"category"
    var method="post"
    //case update
    if(item.category_id != null){
        param.category_id=item.category_id // add new key "category_id" to param
        url=url
        method="put"
    }

    axios({
      url:url,
      method: method,
      data: param
    }).then(res=>{
      if(res){
        getList();
        OnClearForm();
        
      }
    })

  }



  const OnShowModalForm = () =>{
    setShowForm(true)
  }

  const onClickEdit = (item) =>{
    setItem(item);
    setName(item.name);
    setDescription(item.description);
    setStatus(item.status);
    setShowForm(true);
  }
  // -------------------------------------- for handle event --------------------------------

  const server = "http://localhost:8081/api/";
  const getList = () => {
    axios({
      url: server + "category",
      method: "GET",
      data: {}, //json body
    })
      .then(res => {
        var data = res.data;
        setList(data.list);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{display:'flex', justifyContent: 'space-between', padding:10}}>
        <div>category</div>
        <Button variant='primary' onClick={OnShowModalForm}>create new</Button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PARENT-ID</th>
            <th>STATUS</th>
            <th>CREATE AT</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.category_id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.parent_id}</td>
                  <td>{item.status}</td>
                  <td>{item.create_at}</td>
                  <td>
                    <Button variant="primary" onClick={()=> onClickEdit(item)}>Update</Button>
                    <Button
                      variant="danger"
                      onClick={() => OnClickBtnDelete(item)}
                      style={{ marginLeft: 10 }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

{/* ---------------modal alert for delete------------- */}
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={show} onHide={OnHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Are you sure to remove? </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={OnHideModal}>
              No
            </Button>
            <Button variant="primary" onClick={OnDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
{/* ---------------modal alert for delete------------- */}



{/* -----------------modal form insert --------------- */}
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={showForm} onHide={OnHideModalForm}>
          <Modal.Header closeButton>
            <Modal.Title>{item.category_id==null ? "Create" : "Update"}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          <Form>
         
                <Form.Group className="mb-3" controlId="txtName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                    value={name}
                    type="input" 
                    placeholder="name" 
                    onChange={(event)=>{
                        setName(event.target.value) //get value from user on change => set value to name state
                    }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="txtDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    value={description}
                     as="textarea" 
                     placeholder='description'
                     rows={3}
                     onChange={(event)=>{
                        setDescription(event.target.value) //get value
                     }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="txtStatus">
                    <Form.Label>Status</Form.Label>
                    <Form.Control 
                    value={status}
                    type="input" 
                    placeholder="status"
                    onChange={(event)=>{
                      setStatus(event.target.value)
                    }}
                     />
                </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={OnHideModalForm}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={OnClearForm}>
              Clear
            </Button>
            <Button variant="primary" onClick={OnSave}> {item.category_id == null ?"Save": "Update"}</Button>
          </Modal.Footer>
        </Modal>
      </div>
{/* ---------------modal form insert ------------- */}
    </div>
  );
};

export default CategoryPage;
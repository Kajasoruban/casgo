import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { markAsReadAction } from '../redux/actions/userAction';

function Notifications() {
    const { userInfo } = useSelector(state => state.signIn);
    let dispatch=useDispatch();
    let {notifications,loading} =useSelector(state => state.notifications);
     notifications=notifications?notifications:[]
     console.log(notifications);

     let read=true
     notifications&&notifications.map((note)=>{
         if(note.read==false){
         // console.log("uread message found");
         read=false
         }
     })

     const created=(date)=>{
        let creatDate=new Date(date)
        let currentDate=new Date();
        let dif=currentDate.getTime()-creatDate.getTime()
        // let dif=24*60*60*1000
        if(dif<=59*1000){
            return Math.floor(dif/(1000))+'seconds ago'
        }else if(dif<=59*60*1000){
            return Math.floor(dif/(60*1000))+'minutes ago'
        }else if(dif<=23*60*60*1000){
            return Math.floor(dif/(60*60*1000))+'hours ago'
        }else if(dif<=29*23*60*60*1000){
            return Math.floor(dif/(24*60*60*1000))+'days ago'
        }else{
            return dif;
        }
        
     }

    const handleMarkAsRead=()=>{
        dispatch(markAsReadAction())
    }

  return (
    <>
    
    <div>Notifications</div>
    
        {loading?

        <div>
        <div className="spinner-border text-warning " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      :
      notifications.length!==0 ?
      <>
     <div className='container m-5'>
      {/* {notifications.map((note,i)=>(
        <div key={i} className='border row mx-auto'>
           <div className='col-1'>
             <img src={note&&note.from.image.url} className="my-1"style={{width:"4rem",height:"4rem", borderRadius:"50%"}}/>
             </div>
             <div className='col-md-8 col-xl-10  text-xl-center text-lg-center text-sm-end'>
           <h5 className='mt-2 '>{note.message}</h5> 
           </div>
           
            </div>
      
      ))} */}
     <div className='row'>
                      <div className="col-lg-10 right">
                      {!read&&<>
                          <div className="box shadow-sm rounded bg-white mb-3">
                              <div className="box-title border-bottom p-3">
                                  <h6 className="m-0 d-inline">New</h6><button className='ms-5 btn border'onClick={handleMarkAsRead}>Mark as read <DoneAllIcon/></button>
                              </div>
                              <div className="box-body p-0">
                              {notifications.map((note,i)=>{
                                if(note.read===false){
                               
                                 return(
                                   <div key={i} className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                                   <div className="dropdown-list-image me-3">
                                       <img className="rounded-circle" src={note&&note.from.image.url} alt="" />
                                   </div>
                                   <div className=" me-3">
                                       <div className="text-truncate fw-bold">{note.message}</div>
                                       <div className="small">{note.description}</div>
                                   </div>
                                   <span className="ms-auto mb-auto">
                                       <div className="btn-group">
                                           <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                               <MoreVertIcon/>
                                           </button>
                                           <div className="dropdown-menu dropdown-menu-right">
                                               <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                               <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                           </div>
                                       </div>
                                       <br />
                                       <div className="text-right text-muted pt-1">
                                        {note.createdAt&&created(note.createdAt)}
                                       </div>
                                   </span>
                               </div>)}
                                
                              })}
                                  
                              </div>
                          </div></>}
                          <div className="box shadow-sm rounded bg-white mb-3">
                            <div className="box-title border-bottom p-3">
                                <h6 className="m-0">Old</h6>
                            </div>
                            <div className="box-body p-0">
                            {notifications.map((note,i)=>{
                                if(note.read===true){
                               
                                 return(
                                   <div key={i} className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                                   <div className="dropdown-list-image me-3">
                                       <img className="rounded-circle" src={note&&note.from.image.url} alt="" />
                                   </div>
                                   <div className=" me-3">
                                       <div className="text-truncate fw-bold">{note.message}</div>
                                       <div className="small">{note.description}</div>
                                   </div>
                                   <span className="ms-auto mb-auto">
                                       <div className="btn-group">
                                           <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                               <MoreVertIcon/>
                                           </button>
                                           <div className="dropdown-menu dropdown-menu-right">
                                               <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                               <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                           </div>
                                       </div>
                                       <br />
                                       <div className="text-right text-muted pt-1">
                                        {note.createdAt&&created(note.createdAt)}
                                       </div>
                                   </span>
                               </div>)}
                                
                              })}

                            </div>
                            </div>
                      </div>
     </div>
     </div>
     </>
      :
      <div>No notifications</div>
        }

   
    
    
    </>
    
  )
}

export default Notifications
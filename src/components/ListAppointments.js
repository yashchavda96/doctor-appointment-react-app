import React from 'react'
import { Media, Button } from 'reactstrap'

const ListAppointments = ({ appointments, onDelete }) => {
  const handleDelete = (event) => {
    onDelete(event.target.id);
  }
  return (
    <ul>
      {appointments.map((item) => {
        return (
          <li className="p-1 card-border shadow-sm p-3 mb-3 bg-white rounded" style={{ "borderRadius": "0.25rem" }} key={item.id}>
            <Media>
              <Media left top>
                <Button color="danger" className="mr-3 delete-btn"><i id={item.id} onClick={handleDelete} className="fas fa-times"></i></Button>
              </Media>
              <Media body>
                <Media heading className="m-0">
                  {item.patientName}
                </Media>
                <p className="mt-4 mb-0"><span className="font-weight-bold">Age:</span> {item.patientAge} <span className="font-weight-bold">Gender:</span> {item.gender}</p>
                <p><span className="font-weight-bold">Problem:</span> {item.aptNotes}</p>
                <p className="mb-0"><span className="font-weight-bold">Checkup time:</span> {(new Date(item.aptDate)).toUTCString()}</p>
              </Media>
            </Media>
          </li>
        )
      })}
    </ul>
  );
}

export default ListAppointments

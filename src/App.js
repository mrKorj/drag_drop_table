import {useEffect} from "react"
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import {useDispatch, useSelector} from "react-redux"
import {dragRowAction, getDataFromLocalStorageAction} from "./store/actions"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import {NavBar} from "./components/NavBar";

function App() {
    const state = useSelector(state => state.appState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataFromLocalStorageAction(JSON.parse(localStorage.getItem('users-hours-table')) || {}))
    }, [dispatch])

    const handleDragEnd = (e) => {
        if (!e.destination) return

        let tempData = state.users
        let [source_index] = tempData.splice(e.source.index, 1)
        tempData.splice(e.destination.index, 0, source_index)

        dispatch(dragRowAction(tempData))
        localStorage.setItem('users-hours-table', JSON.stringify(state.users))
    }

    return (
        <div>
            <NavBar/>

            <div className="container mt-4">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            {
                                state.columns.map(col => (
                                    <th key={col}>{col}</th>
                                ))
                            }
                        </tr>
                        </thead>
                        <Droppable droppableId="droppable-1">
                            {(provider) => (
                                <tbody
                                    className="text-capitalize"
                                    ref={provider.innerRef}
                                    {...provider.droppableProps}
                                >
                                {state.users?.map((user, index) => (
                                    <Draggable
                                        key={user.id}
                                        draggableId={user.id + ''}
                                        index={index}
                                    >
                                        {(provider) => (
                                            <tr {...provider.draggableProps} ref={provider.innerRef}>
                                                <td {...provider.dragHandleProps}>{user.uid}</td>
                                                <td {...provider.dragHandleProps}>{user.name}</td>
                                                <td {...provider.dragHandleProps}>{user.extraHours}</td>
                                                <td {...provider.dragHandleProps}>{user.handHours}</td>
                                                <td {...provider.dragHandleProps}>{user.hours}</td>
                                                <td {...provider.dragHandleProps}>{user.totalHours}</td>
                                                <td>
                                                    <div style={{display: "flex", justifyContent: "space-around"}}>
                                                        <span>&#8285;</span>
                                                        <span>&#128200;</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </Draggable>
                                ))}
                                {provider.placeholder}
                                </tbody>
                            )}
                        </Droppable>
                    </table>
                </DragDropContext>
            </div>
        </div>

    );
}

export default App;

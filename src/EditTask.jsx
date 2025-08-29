const EditTask = ({editTask, setEditTask, cancel, save}) => {
    const handleUpdate = (e) => {
        setEditTask(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        save(editTask)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Update your task here"
                onChange={handleUpdate}
                value={editTask}
            />
            <button onClick={cancel}>Cancel</button>
            <button type="submit">Save</button>
        </form>
    )
}

export default EditTask
export default function Modal({ children, onClose }) {
    return <div className="modal">
        <button className='btn' onClick={onClose}>❌</button>
    </div>
}
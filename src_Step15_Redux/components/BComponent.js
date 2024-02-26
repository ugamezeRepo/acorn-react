import { useDispatch, useSelector } from "react-redux";

export default function BComponent() {
	const dispatch = useDispatch();
	const userName = useSelector(state => state.userName);

	const deleteBtn = () => {
		const action = { type: 'UPDATE_USER', payload: '' };
		dispatch(action);
	}

	return (
		<div>
			<p><strong>[ B Component ]</strong></p>
			{userName && <button onClick={deleteBtn}>userName 삭제</button>}
		</div>
	);
}

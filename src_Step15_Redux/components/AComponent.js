import { useSelector } from 'react-redux';

export default function AComponent() {
	const userName = useSelector((state) => {
		return state.userName;
	});

	return (
		<div>
			<p><strong>[ A Component ]</strong></p>
			{userName && <p><strong>{userName}</strong> 로그인 중</p>}
		</div>
	);
}

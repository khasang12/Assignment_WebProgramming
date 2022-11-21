import MyButton from '../../components/MyButton';

function HomePage() {
    return (
        <div>
            <MyButton className="m-5" primary to="/details?id=P123456577">
                Goto Product details
            </MyButton>
        </div>
    );
}

export default HomePage;

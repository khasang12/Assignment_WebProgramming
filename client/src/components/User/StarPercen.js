import { AiTwotoneStar } from 'react-icons/ai';

const rateStar = [
    {
        value: 1,
        votes: 1,
    },
    {
        value: 2,
        votes: 300,
    },
    {
        value: 3,
        votes: 4400,
    },

    {
        value: 4,
        votes: 100,
    },
    {
        value: 5,
        votes: 5000,
    },
];

function StarPercen({ id = '' }) {
    const totalVotes = rateStar.reduce((res, item) => res + item.votes, 0);
    return (
        <div>
            {rateStar.map((item, index) => {
                let percen = Number.parseFloat((100 * item.votes) / totalVotes).toFixed(1);
                return (
                    <div key={index} className="d-flex align-items-center">
                        <div>
                            <span className="mr-1">{item.value}</span> <AiTwotoneStar size={18} />
                        </div>
                        <div className="progress mx-2 my-2" style={{ height: 10, width: 'calc(100% - 64px)', flex: 1 }}>
                            <div
                                style={{ width: `${percen}%`, backgroundColor: 'var(--primary)' }}
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={percen}
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                        <span className="ml-0" style={{ minWidth: 44 }}>
                            {percen}%
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default StarPercen;

import LogRow from './LogRow';

function LogTable({ exercises, onDelete, onEdit }) {
    return (
        <table>
            <caption> This is the log of exercises completed.</caption>
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reps</th>
                        <th>Weight</th>
                        <th>Unit</th>
                        <th>Date</th>
                    </tr>
                </thead>
            <tbody>
                {exercises.map((exercise, i) =>
                <LogRow
                    exercise={exercise}
                    key={i}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    />)}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    );
}

export default LogTable;
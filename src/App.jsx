const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for a filter.</div>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for an issue add form.</div>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}
                </td>
                <td>{issue.title}</td>
            </tr>
        )
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        )
    }
}

const issues = [
    {
        id:1,
        status: 'Open',
        owner: 'Jon',
        created: new Date('2018-1-5'),
        effort: 5,
        completionDate: undefined,
        title: 'Error in console when clicking Add'
    },
    {
        id: 2,
        status: 'Assigned',
        owner: 'Jon',
        created: new Date('2018-1-6'),
        effort: 12,
        completionDate: new Date('2018-1-10'),
        title: 'Missing Bottom Border on panel'
    }
]
class IssueList extends React.Component {
    constructor() {
        super();
        this.state = { issues: issues };
        setTimeout(this.createTestIssue.bind(this), 2000);
    }
    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
    }

    createTestIssue(){
        this.createIssue({
            status: 'New',
            owner: 'Jono',
            created: new Date(),
            title: 'Completion Date should be optional',
        });
    }
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues} />
                <hr />
                <IssueAdd />
                <hr />
            </div>
        );
    }
}

ReactDOM.render(<IssueList />, contentNode);
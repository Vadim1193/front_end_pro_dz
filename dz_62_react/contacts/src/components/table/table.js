import { Table, Button } from 'antd';

export default function ContactsTable(props) {
    const columns = [
        {
            title: 'First name',
            dataIndex: 'name',
            key: 'firstName',
            render: (text, record) => {
                const fullName = record.name.split(" ")
                return fullName[0];
            }
        },
        {
            title: 'Last name',
            dataIndex: 'name',
            key: 'lastName',
            render: (text, record) => {
                const fullName = record.name.split(" ")
                return fullName[1];
            }
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => <Button onClick={() => props.remove(record.id)} danger>Delete</Button>,
        },
    ];
    
    return (
        <div className='table-wrapper'>
            <Table 
                columns={columns} 
                dataSource={props.contacts} 
                key={props.contacts.id} 
                pagination= {{ pageSize: '7' }}                                                                                                                  
            />
        </div>
    )
};


import { Button, Form, Input } from 'antd';

export default function FormContact({contacts, maxId, ...props}) {

    const onFinish = (values) => {
        if (values) {
            const newContact = [{
                id: maxId + 1,
                name: `${values.firstName} ${values.lastName}`,
                phone: values.phone,
            }]

            props.setContacts([...contacts, ...newContact]);
            props.toggleVis();
        }
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                    margin: '0 auto',
                }}
                autoComplete="off"
                onFinish={onFinish}
            >
                <Form.Item
                    label="First name"
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last name"
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your last name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input type="tel" />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 9,
                    }}
                >
                    <Button type="primary" htmlType="submit">Save</Button>
                    <Button type="default" onClick={props.toggleVis} style={{ marginLeft: '10px' }}>Cancel</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

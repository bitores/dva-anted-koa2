import React, {Component} from 'react';
import { connect } from 'dva';
import { Table} from 'antd';

@connect(({example})=>({
	example
}))        
export default class IndexPage extends Component {

	render(){
		const columns = [
		    {
		      title: 'ID',
		      dataIndex: 'id'
		    },
		    {
		      title: '值',
		      dataIndex: 'value'
		    }
		  ];
		console.log(this.props);

		const {example:{data}} = this.props;
		return (
			<Table
		      dataSource={data}
		      columns={columns}
		      rowKey="id"
		    ></Table>
		)
	}
}
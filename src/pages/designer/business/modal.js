import {nameRegExp, labelRegExp} from '../constant/index'


// 弹框默认数据格式
export const modaldefaultData = {
    title: '' || '新建',
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    content: []
}

// 实体类型配置
export const entityData = [
    {
        id: 1,
        label: '实体类型名称',
        name: 'name',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入实体类型名称',
        tooltip:'仅支持英文、数字、下划线，但不支持以下划线开头，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: nameRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    },
    {
        id: 2,
        label: '实体类型的展示名称',
        name: 'showName',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入实体类型的展示名称',
        tooltip:'支持中英文、数字、特殊字符，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: labelRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    }
]

// 关系类型配置
export const relationshipData = [
    {
        id: 1,
        label: '开始的实体类型',
        name: 'source',
        type: 'SelectSingle',
        required: 1,
        message: '请选择开始的实体类型',
    },
    {
        id: 2,
        label: '结束的实体类型',
        name: 'target',
        type: 'SelectSingle',
        required: 1,
        message: '请选择结束的实体类型'
    },
    {
        id: 3,
        label: '关系类型名称',
        name: 'name',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入关系类型名称',
        tooltip: '关系名称由系统自动生成，支持变量命名法，仅支持英文、数字、下划线，但不可以以下划线开头，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: nameRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    },
    {
        id: 4,
        label: '关系类型的展示名称',
        name: 'showName',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入关系类型的展示名称',
        tooltip: '支持中英文、数字、特殊字符，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: labelRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    }
]

// 表类型配置
export const tableData = [
    {
        id: 1,
        label: '表名称',
        name: 'name',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入表名称',
        tooltip:'仅支持英文、数字、下划线，但不支持以下划线开头，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: nameRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    },
    {
        id: 2,
        label: '表的展示名称',
        name: 'showName',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入表的展示名称',
        tooltip:'支持中英文、数字、特殊字符，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: labelRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    }
]

// 实体类型配置 页面右侧
export const entityDataRight = [
    {
        id: 51,
        label: '属性名称',
        name: 'protoName',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入属性名称',
        tooltip:'仅支持英文、数字、下划线，但不支持以下划线开头，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: nameRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    },
    {
        id: 52,
        label: '属性类型',
        name: 'protoType',
        type: 'SelectSingle',
        required: 1,
        disabled: 0,
        message: '请选择属性类型',
        tooltip:'',
        rule: []
    },
    {
        id: 53,
        label: '展示名称',
        name: 'showName',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入属性名称',
        tooltip:'支持中英文、数字、特殊字符，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: labelRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    },
]

// 表类型配置 页面右侧
export const tableDataRight = [
    {
        id: 51,
        label: '属性名称',
        name: 'protoName',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入属性名称',
        tooltip:'仅支持英文、数字、下划线，但不支持以下划线开头，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: nameRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    },
    {
        id: 52,
        label: '属性类型',
        name: 'protoType',
        type: 'SelectSingle',
        required: 1,
        disabled: 0,
        message: '请选择属性类型',
        tooltip:'',
        rule: []
    },
]

// 关系类型配置 页面右侧
export const relationshipRight = [
    {
        id: 51,
        label: '属性名称',
        name: 'protoName',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入属性名称',
        tooltip:'仅支持英文、数字、下划线，但不支持以下划线开头，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: nameRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    },
    {
        id: 52,
        label: '属性类型',
        name: 'protoType',
        type: 'SelectSingle',
        required: 1,
        disabled: 0,
        message: '请选择属性类型',
        tooltip:'',
        rule: []
    },
    {
        id: 53,
        label: '展示名称',
        name: 'showName',
        type: 'InputShort',
        required: 1,
        disabled: 0,
        message: '请输入属性名称',
        tooltip:'支持中英文、数字、特殊字符，最长字符数128',
        rule: [
            {max: 128, message: '最长字符数128，请查看命名规则'},
            {pattern: labelRegExp,message: '不符合命名规则，请查看命名规则'}
        ]
    },
]

// 实体 右侧表格
export const entityColumns = [
    {
        title: '属性名称',
        dataIndex: 'name',
        key: 'name',
        width: 100,
    },
    {
        title: '属性类型',
        dataIndex: 'type',
        key: 'type',
        width: 100,
    },
    {
        title: '展示名称',
        dataIndex: 'showName',
        key: 'showName',
        width: 80,
    },
    {
        title: '是否主键',
        dataIndex: 'iskeyword',
        key: 'iskeyword',
        width: 75,
    },
    {
        title: '记录的展示名称',
        dataIndex: 'recordName',
        key: 'recordName',
        width: 115,
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        width: 75,
    }
];

// 表 右侧表格
export const tableColumns = [
    {
        title: '属性名称',
        dataIndex: 'name',
        key: 'name',
        width: 100,
    },
    {
        title: '属性类型',
        dataIndex: 'type',
        key: 'type',
        width: 100,
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        width: 75,
    }
];
// 关系 右侧表格
export const relationColumns = [
    {
        title: '属性名称',
        dataIndex: 'name',
        key: 'name',
        width: 100,
    },
    {
        title: '属性类型',
        dataIndex: 'type',
        key: 'type',
        width: 100,
    },
    {
        title: '展示名称',
        dataIndex: 'showName',
        key: 'showName',
        width: 80,
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        width: 75,
    }
];

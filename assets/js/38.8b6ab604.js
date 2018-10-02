(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{271:function(s,t,a){s.exports=a.p+"assets/img/mysql-joins.26356b40.png"},280:function(s,t,a){"use strict";a.r(t);var n=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"mysql"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),n("ul",[n("li",[s._v("加了\\G，列名就变成竖着放的。")])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("table")]),s._v(" \\G\n")])])]),n("ul",[n("li",[s._v("显示字符集设置")])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),n("span",{attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'%char%'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("ul",[n("li",[s._v("改变字符集")])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" names utf8 "),n("span",{attrs:{class:"token comment"}},[s._v("-- 相当于")]),s._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" character_set_client "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8     "),n("span",{attrs:{class:"token comment"}},[s._v("-- 用来设置客户端送给mysql服务器的数据的字符集")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" character_set_results "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8    "),n("span",{attrs:{class:"token comment"}},[s._v("-- 服务器返回查询结果时使用的字符集")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" character_set_connection "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8 "),n("span",{attrs:{class:"token comment"}},[s._v("-- mysql服务器把客户端传来的数据，从character_set_client字符集转换成character_set_connection字符集")]),s._v("\n")])])]),n("ul",[n("li",[s._v("数据基本操作")])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("-- 创建数据库")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" database_name "),n("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("CHARACTER")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" utf8 "),n("span",{attrs:{class:"token keyword"}},[s._v("COLLATE")]),s._v(" utf8_general_ci"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 更新记录")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" tbl_name "),n("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" col_name1 "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" exp1"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col_name2 "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" exp2"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 删除记录")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl_name "),n("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" col_name1 "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" exp1"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 插入记录")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name"),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col_name1"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col_name2"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("VALUES")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exp11"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" exp21"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("exp12"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" exp22"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 表增加列")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),n("span",{attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" col_name "),n("span",{attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'0'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 表删除列")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),n("span",{attrs:{class:"token keyword"}},[s._v("DROP")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" col_name"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 表修改列")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),n("span",{attrs:{class:"token keyword"}},[s._v("MODIFY")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" col_name "),n("span",{attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'0'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 表重命名列")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),n("span",{attrs:{class:"token keyword"}},[s._v("RENAME")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" old_name "),n("span",{attrs:{class:"token keyword"}},[s._v("to")]),s._v(" new_name"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 表修改列")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name CHANGE "),n("span",{attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" old_name new_name "),n("span",{attrs:{class:"token keyword"}},[s._v("tinyint")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'0'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 表增加索引")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),n("span",{attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("INDEX")]),s._v(" idx_name"),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col1"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col2"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("-- 表修改引擎")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" tbl_name "),n("span",{attrs:{class:"token keyword"}},[s._v("ENGINE")]),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token keyword"}},[s._v("InnoDB")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("ul",[n("li",[s._v("不存在就插入，存在就更新")])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" tbl_name\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("col_name1"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" col_name2"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("VALUES")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("1")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("2")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("DUPLICATE")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" col_name2"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token number"}},[s._v("1")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("ul",[n("li",[s._v("mysql连unix domain socket")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("mysql -S /tmp/mysql*.sock\n")])])]),n("ul",[n("li",[n("p",[s._v("mysql把结果输出到文件")]),s._v(" "),n("ul",[n("li",[s._v("方案1，在shell里")])]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('echo "select * from database.tbl_name;" | mysql > file_name\n')])])]),n("ul",[n("li",[s._v("方案2，在mysql里")])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("-- 文件会存在数据所在的位置，在datadir变量中，show variables like '%datadir%'可以看到，在/etc/my.conf里的datadir可配置")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("OUTFILE")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'file_name'")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tbl_name"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),n("li",[n("p",[s._v("自动更新时间")])])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("t_table"),n("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),n("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("   "),n("span",{attrs:{class:"token keyword"}},[s._v("INT")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("11")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'0'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("modify_time"),n("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("    "),n("span",{attrs:{class:"token keyword"}},[s._v("TIMESTAMP")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("CURRENT_TIMESTAMP")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v("`")]),s._v("id"),n("span",{attrs:{class:"token punctuation"}},[s._v("`")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("ENGINE")]),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("MyISAM "),n("span",{attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("CHARSET")]),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),n("ul",[n("li",[n("p",[n("code",[s._v("last_insert_id")]),s._v("只会返回当前链接的insert id，多链接并发操作不会互相影响。"),n("code",[s._v("last_insert_id")]),s._v("只会返回自动生成的id，比如"),n("code",[s._v("auto-increment")]),s._v("，自己插入的id不算。")])]),s._v(" "),n("li",[n("p",[s._v("查找多个key")])])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" tbl_name\n"),n("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" col_name "),n("span",{attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("1")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("2")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("3")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("4")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("5")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("ul",[n("li",[s._v("查询当前事务级别")])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),n("span",{attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'%isola%'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),n("ul",[n("li",[s._v("各种"),n("code",[s._v("join")]),s._v("的图")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(271),alt:""}})]),s._v(" "),n("ul",[n("li",[n("code",[s._v("datetime")]),s._v("转成"),n("code",[s._v("date")])])]),s._v(" "),n("div",{staticClass:"language-sql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cast"),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("create_time "),n("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("date")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);o.options.__file="index.md";t.default=o.exports}}]);
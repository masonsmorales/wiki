# 变量

## Command Substitution

将程序的标准输出保存到变量中。如果有多行，合并成一行。

```bash
> ls
bin Documents Desktop ...
Downloads public_html ...

> myvar=$(ls)
> echo $myvar
bin Documents Desktop Downloads public_html ...
```

## 导出变量

```bash
export http_proxy=http://127.0.0.1:8080
http -v www.lightxue.com
# 或
http_proxy=http://127.0.0.1:8080 http -v www.lightxue.com
```

## 特殊变量

变量名 | 含义
--- | ---
$0 | 脚本名
$# | 参数个数
$@ | 传入的所有参数
$? | 最后一个程序退出的状态码
$$ | 当前脚本的pid
$USER | 运行脚本的用户名
$SECONDS | 脚本运行到此的时间
$RANDOM | 随机数
$LINENO | 当前行号

## 数组操作

Syntax        | Result
---           | ---
`arr=()`        | Create an empty array
`arr=(1 2 3)`   | Initialize array
`${arr[2]}`     | Retrieve third element
`${arr[@]}`     | Retrieve all elements
`${!arr[@]}`    | Retrieve array indices
`${#arr[@]}`    | Calculate array size
`arr[0]=3`      | Overwrite 1st element
`arr+=(4)`      | Append value(s)
`str=$(ls)`     | Save ls output as a string
`arr=( $(ls) )` | Save ls output as an array of files
`${arr[@]:s:n}` | Retrieve n elements starting at index s

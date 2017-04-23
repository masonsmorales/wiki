# gdb

0. core dump大小不限制
```sh
ulimit -c unlimited
```

0. 显示栈帧
```sh
bt full #显示局部变量
bt 3 # 开头3个栈帧
bt -3 # 最后3个栈帧
```

0. 显示寄存器eax内容
```sh
p $eax
```

0. 格式化输出
```sh
p/x $eax # 十六进制
p/d $eax # 十进制
p/u $eax # 无符号
p/o $eax # 八进制
p/t $eax # 二进制(two)
p/a $eax # 地址
p/c $eax # 字符(ASCII)
p/f $eax # 浮点小数
p/s $eax # 字符串
p/i $eax # 机器语言(仅在显示内存的x命令(eXamining)中可用)
```

0. 显示汇编指令
```sh
x/10i $pc # pc所指地址开始的10条指令
disassemble # 当前整个函数
disassemble $pc # 计数器所在函数的整个函数
disassemble $pc $pc+50 # 开始到结束之间的部分
```

0. ni(nexti)和si(stepi)逐条招行汇编指令，ni不进入函数体

0. c(continue)可以加次数作参数
```sh
c 5 # 遇到断点5次不停止
```

0. watch <表达式>，表达式指常量或变量等
```sh
watch var   # stop if change(write)
awatch var  # stop if access(read or write)
rwatch var  # stop if read
```

0. 删除断点和监视
```sh
i b # info break
d 2 # delete 2
```

0. 改变变量的值：set variable <变量>=<表达式>
```sh
set variable var = 10
set variable var = var2 + 10
set variable var = func(100) + 10
```

0. 生成core dump，保存当前调试镜像
```sh
generate-core-file filename
```

0. 查看进程信息
```sh
info proc
```

0. attach到进程
```sh
attach 17606 # attach到pid为17606的进程上
detach # 用完分离
```

0. 条件断点
```sh
b main if var == func(argc)
condition 3 if var == func(args) # 给断点3加上触发条件
```

0. 忽略断点
```sh
ignore 3 4 # 忽略断点3 4次
```

0. 跳出当前代码块
```sh
until
until func # 直到执行完func
```

0. 执行完当前函数后暂停
```sh
finish
```

0. 反复执行
```sh
continue 次数
step 次数
stepi 次数
next 次数
nexti 次数
```

0. clear范围删除断点
```sh
clear func
clear lineno
clear file:lineno
clear file:func
clear breakno
```

0. enable, disable启用和禁用断点

0. 断点命令
```sh
command 2 # 2是断点的编号
>p var # 各种命令
>end
```

0. 查看帧信息
```sh
frame    # 查看当前帧
frame 3  # 查看编号为3的帧
i frame 3 # 查看编号为3的帧
```

0. 进程内存映射
```sh
i proc mapping
```

0. 格式化输出
```sh
printf "%d\n", var
```

0. 显示变量
```sh
info variables
```
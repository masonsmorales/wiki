(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{287:function(_,v,i){"use strict";i.r(v);var t=i(0),a=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"linux程序调试与性能分析"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux程序调试与性能分析","aria-hidden":"true"}},[_._v("#")]),_._v(" Linux程序调试与性能分析")]),_._v(" "),i("p",[_._v("2012年9月10日听lanshou的讲座，这里梳理一下。")]),_._v(" "),i("h2",{attrs:{id:"静态分析"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#静态分析","aria-hidden":"true"}},[_._v("#")]),_._v(" 静态分析")]),_._v(" "),i("p",[_._v("查看二进制程序工具")]),_._v(" "),i("ul",[i("li",[_._v("objdump 查看二进制文件")]),_._v(" "),i("li",[_._v("readelf 查看elf二进制文件")]),_._v(" "),i("li",[_._v("nm 查看符号表")]),_._v(" "),i("li",[_._v("strings 查看字符串")]),_._v(" "),i("li",[_._v("strip 去除符号表")])]),_._v(" "),i("p",[_._v("可以去/proc/pid/maps看进程内存逻辑空间布局，pmap命令也可以看")]),_._v(" "),i("p",[_._v("编译时.a一般放.o后面；底层库放在上层库后面(如果相互依赖，可以a.a b.a a.a这么放)；适当使用.a可以加速链接，避免目标文件不必要的增大")]),_._v(" "),i("p",[_._v("man ld.so; man ldconfig 看这两个man去了解一下动态链接")]),_._v(" "),i("h2",{attrs:{id:"运行阶段"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#运行阶段","aria-hidden":"true"}},[_._v("#")]),_._v(" 运行阶段")]),_._v(" "),i("p",[_._v("printf常用技巧")]),_._v(" "),i("ul",[i("li",[_._v("语句中使用："),i("code",[_._v("__ FILE__")]),_._v("、"),i("code",[_._v("__ FUNCTION__")]),_._v("、"),i("code",[_._v("__ LINE__")])]),_._v(" "),i("li",[_._v("用自定义宏代替printf本身")]),_._v(" "),i("li",[_._v("输出乱码导致屏幕错乱的处理：执行reset命令，还不行就只有重新login了")]),_._v(" "),i("li",[_._v("用fprintf(stderr...)/cerr，不用printf/cout，以免缓存问题而在ssh或是多进程线程看不到，或是debug信息与正常输出信息混杂在一起")])]),_._v(" "),i("p",[_._v("gdb常用技巧")]),_._v(" "),i("ul",[i("li",[_._v("watch设定监控断点(修改指定变量时中断)。gdb会在离开函数时自动删除对自动变量的监控。为了对一些变量更好的监控，watch地址会比watch变量名更好一些")]),_._v(" "),i("li",[_._v("attach pid能attach已经运行的进程，"),i("code",[_._v("gdb -p <pid>")]),_._v("也可以")]),_._v(" "),i("li",[_._v("core文件使用gdb program core")])]),_._v(" "),i("p",[_._v("对于错误难以重现，难以生成core文件，没有调试信息的情况，可以捕获SIGSEGV/SIGBUS，在信号处理函数中log下关键信息")]),_._v(" "),i("p",[_._v("对于栈溢出的bug，可以用gcc中堆栈保护技术来检测问题出现的地方。gcc4.1中有三个与堆栈保护有关的编译选项：-fstack-protector，-fstack-protector-all，-fno-stack-protector")]),_._v(" "),i("p",[_._v("错误难以重现，运营中的系统没有调试信息，负载高，直接log性能低的情况，可以用内存log的方法。原理是：")]),_._v(" "),i("ul",[i("li",[_._v("log时不写磁盘，而是写内存")]),_._v(" "),i("li",[_._v("发现错误时才把log从内存写入磁盘")]),_._v(" "),i("li",[_._v("需要使用共享内存")]),_._v(" "),i("li",[_._v("log下整个请求包，及主要处理流程")]),_._v(" "),i("li",[_._v("必要时重放请求包来重现")])]),_._v(" "),i("p",[_._v("一定规模的集群系统，逻辑复杂，涉及多台机器，错误难以重现的情况，用远程log。把包发到logserver集中存储，配合染色机制")]),_._v(" "),i("p",[_._v("valgrind是套Linux下开源仿真调试工具")]),_._v(" "),i("h2",{attrs:{id:"性能分析"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#性能分析","aria-hidden":"true"}},[_._v("#")]),_._v(" 性能分析")]),_._v(" "),i("p",[_._v("性能分析步骤")]),_._v(" "),i("ul",[i("li",[_._v("确定运行时间主要花在用户态还是内核态")]),_._v(" "),i("li",[_._v("如果是内核态，用strace")]),_._v(" "),i("li",[_._v("如果是用户态，用gprof")]),_._v(" "),i("li",[_._v("另外可以使用其他工具(比如ltrace/valgrind等)辅助")])]),_._v(" "),i("p",[_._v("时间分析工具：time，sar -x，cat /proc/pid/stat")]),_._v(" "),i("p",[_._v("strace重要参数：")]),_._v(" "),i("ul",[i("li",[_._v("-c计算各个系统调用累计占用的时间")]),_._v(" "),i("li",[_._v("-T -tt显示单个系统调用的开始时间、执行时间")])]),_._v(" "),i("p",[_._v("gprof使用注意")]),_._v(" "),i("ul",[i("li",[_._v("gcc -pg -g")]),_._v(" "),i("li",[_._v("不能strip")]),_._v(" "),i("li",[_._v("必须正常途径退出(exit, main返回)，不能kill -9")]),_._v(" "),i("li",[_._v("有时不太准，数据量大和运行时间长的时候好一些")]),_._v(" "),i("li",[_._v("可以c为函数进行性能分析，libc_p.a(pgc -lc_p)")])]),_._v(" "),i("p",[_._v("系统整体性能")]),_._v(" "),i("ul",[i("li",[_._v("vmstat")]),_._v(" "),i("li",[_._v("iostat(通常用法iostat -x)")]),_._v(" "),i("li",[_._v("sar(sar -x 或 sar -d -p)")]),_._v(" "),i("li",[_._v("top")]),_._v(" "),i("li",[_._v("free")]),_._v(" "),i("li",[_._v("netstat")])]),_._v(" "),i("h2",{attrs:{id:"学习方法"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#学习方法","aria-hidden":"true"}},[_._v("#")]),_._v(" 学习方法")]),_._v(" "),i("ul",[i("li",[_._v("man\n"),i("ul",[i("li",[_._v("man 5 proc")]),_._v(" "),i("li",[_._v("man strace")]),_._v(" "),i("li",[_._v("man ld.so; man ldconfig")])])]),_._v(" "),i("li",[_._v("info\n"),i("ul",[i("li",[_._v("info info")]),_._v(" "),i("li",[_._v("info gcc")]),_._v(" "),i("li",[_._v("info gprof")]),_._v(" "),i("li",[_._v("info gdb")])])]),_._v(" "),i("li",[_._v("google")]),_._v(" "),i("li",[_._v("测试程序")])])])}],!1,null,null,null);a.options.__file="linux-performance-note.md";v.default=a.exports}}]);
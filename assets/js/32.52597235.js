(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{287:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"epoll用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epoll用法","aria-hidden":"true"}},[t._v("#")]),t._v(" epoll用法")]),t._v(" "),a("p",[t._v("epoll的接口很简单，只有3个函数")]),t._v(" "),a("h2",{attrs:{id:"epoll-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epoll-create","aria-hidden":"true"}},[t._v("#")]),t._v(" epoll_create")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("epoll_create")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" size"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("创建一个epoll的句柄，"),a("code",[t._v("size")]),t._v("用来告诉内核这个监听的数目一共有多大。这个参数不同于"),a("code",[t._v("select()")]),t._v("中的第一个参数，给出最大监听的fd+1的值。需要注意的是，当创建好epoll句柄后，它就是会占用一个fd值，在linux下如果查看/proc/进程id/fd/，是能够看到这个fd的，所以在使用完epoll后，必须调用"),a("code",[t._v("close()")]),t._v("关闭，否则可能导致fd被耗尽。")]),t._v(" "),a("h2",{attrs:{id:"epoll-ctl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epoll-ctl","aria-hidden":"true"}},[t._v("#")]),t._v(" epoll_ctl")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("epoll_ctl")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" epfd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" op"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" fd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" epoll_event "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("epoll的事件注册函数，它不同与"),a("code",[t._v("select()")]),t._v("是在监听事件时告诉内核要监听什么类型的事件，而是在这里先注册要监听的事件类型。第一个参数是"),a("code",[t._v("epoll_create()")]),t._v("的返回值，第二个参数表示动作，用三个宏来表示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("EPOLL_CTL_ADD")])]),t._v(" "),a("td",[t._v("注册新的fd到epfd中")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("EPOLL_CTL_MOD")])]),t._v(" "),a("td",[t._v("修改已经注册的fd的监听事件")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("EPOLL_CTL_DEL")])]),t._v(" "),a("td",[t._v("从epfd中删除一个fd")])])])]),t._v(" "),a("p",[t._v("第三个参数是需要监听的fd，第四个参数是告诉内核需要监听什么事，"),a("code",[t._v("struct epoll_event")]),t._v("结构如下：")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" epoll_event "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    __uint32_t events"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("/* Epoll events */")]),t._v("\n    epoll_data_t data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("/* User data variable */")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("events可以是以下几个宏的集合：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("EPOLLIN")])]),t._v(" "),a("td",[t._v("表示对应的文件描述符可以读（包括对端SOCKET正常关闭）；")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("EPOLLOUT")])]),t._v(" "),a("td",[t._v("表示对应的文件描述符可以写；")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("EPOLLPRI")])]),t._v(" "),a("td",[t._v("表示对应的文件描述符有紧急的数据可读（这里应该表示有带外数据到来）；")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("EPOLLERR")])]),t._v(" "),a("td",[t._v("表示对应的文件描述符发生错误；")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("EPOLLHUP")])]),t._v(" "),a("td",[t._v("表示对应的文件描述符被挂断；")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("EPOLLET")])]),t._v(" "),a("td",[t._v("将epoll设为边缘触发(Edge Triggered)模式，这是相对于水平触发(Level Triggered)来说的。")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("EPOLLONESHOT")])]),t._v(" "),a("td",[t._v("只监听一次事件，当监听完这次事件之后，如果还需要继续监听这个socket的话，需要再次把这个socket加入到EPOLL队列里")])])])]),t._v(" "),a("h2",{attrs:{id:"epoll-wait"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#epoll-wait","aria-hidden":"true"}},[t._v("#")]),t._v(" epoll_wait")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("epoll_wait")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" epfd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("epoll_events"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maxevents"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" timeout"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("等待事件的产生，类似于"),a("code",[t._v("select()")]),t._v("调用。参数events用来从内核得到事件的集合，"),a("code",[t._v("maxevents")]),t._v("告之内核这个events有多大，这个"),a("code",[t._v("maxevents")]),t._v("的值不能大于创建"),a("code",[t._v("epoll_create()")]),t._v("时的size，参数timeout是超时时间（毫秒，0会立即返回，-1将不确定，也有说法说是永久阻塞）。该函数返回需要处理的事件数目，如返回0表示已超时。")]),t._v(" "),a("h2",{attrs:{id:"et与lt的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#et与lt的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" ET与LT的区别")]),t._v(" "),a("p",[t._v("从man手册中，得到ET和LT的具体描述如下")]),t._v(" "),a("p",[t._v("EPOLL事件有两种模型：")]),t._v(" "),a("ul",[a("li",[t._v("Edge Triggered (ET)")]),t._v(" "),a("li",[t._v("Level Triggered (LT)")])]),t._v(" "),a("p",[t._v("假如有这样一个例子：")]),t._v(" "),a("ol",[a("li",[t._v("我们已经把一个用来从管道中读取数据的文件句柄(RFD)添加到epoll描述符")]),t._v(" "),a("li",[t._v("这个时候从管道的另一端被写入了2KB的数据")]),t._v(" "),a("li",[t._v("调用"),a("code",[t._v("epoll_wait(2)")]),t._v("，并且它会返回RFD，说明它已经准备好读取操作")]),t._v(" "),a("li",[t._v("然后我们读取了1KB的数据")]),t._v(" "),a("li",[t._v("调用"),a("code",[t._v("epoll_wait(2)")]),t._v("......")])]),t._v(" "),a("h3",{attrs:{id:"edge-triggered-工作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edge-triggered-工作模式","aria-hidden":"true"}},[t._v("#")]),t._v(" Edge Triggered 工作模式")]),t._v(" "),a("p",[t._v("如果我们在第1步将RFD添加到epoll描述符的时候使用了"),a("code",[t._v("EPOLLET")]),t._v("标志，那么在第5步调用"),a("code",[t._v("epoll_wait(2)")]),t._v("之后将有可能会挂起，因为剩余的数据还存在于文件的输入缓冲区内，而且数据发出端还在等待一个针对已经发出数据的反馈信息。只有在监视的文件句柄上发生了某个事件的时候 ET 工作模式才会汇报事件。因此在第5步的时候，调用者可能会放弃等待仍在存在于文件输入缓冲区内的剩余数据。在上面的例子中，会有一个事件产生在RFD句柄上，因为在第2步执行了一个写操作，然后，事件将会在第3步被销毁。因为第4步的读取操作没有读空文件输入缓冲区内的数据，因此我们在第5步调用 "),a("code",[t._v("epoll_wait(2)")]),t._v("完成后，是否挂起是不确定的。")]),t._v(" "),a("p",[t._v("epoll工作在ET模式的时候，必须使用非阻塞套接口，以避免由于一个文件句柄的阻塞读/阻塞写操作把处理多个文件描述符的任务饿死。最好以下面的方式调用ET模式的epoll接口，在后面会介绍避免可能的缺陷。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("基于非阻塞文件句柄")])]),t._v(" "),a("li",[a("p",[t._v("只有当"),a("code",[t._v("read(2)")]),t._v("或者"),a("code",[t._v("write(2)")]),t._v("返回"),a("code",[t._v("EAGAIN")]),t._v("时才需要挂起，等待。但这并不是说每次"),a("code",[t._v("read()")]),t._v("时都需要循环读，直到读到产生一个EAGAIN才认为此次事件处理完成，当"),a("code",[t._v("read()")]),t._v("返回的读到的数据长度小于请求的数据长度时，就可以确定此时缓冲中已没有数据了，也就可以认为此事读事件已处理完成。")])])]),t._v(" "),a("h3",{attrs:{id:"level-triggered-工作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#level-triggered-工作模式","aria-hidden":"true"}},[t._v("#")]),t._v(" Level Triggered 工作模式")]),t._v(" "),a("p",[t._v("相反的，以LT方式调用epoll接口的时候，它就相当于一个速度比较快的"),a("code",[t._v("poll(2)")]),t._v("，并且无论后面的数据是否被使用，因此他们具有同样的职能。因为即使使用ET模式的epoll，在收到多个chunk的数据的时候仍然会产生多个事件。调用者可以设定"),a("code",[t._v("EPOLLONESHOT")]),t._v("标志，在 "),a("code",[t._v("epoll_wait(2)")]),t._v("收到事件后epoll会与事件关联的文件句柄从epoll描述符中禁止掉。因此当"),a("code",[t._v("EPOLLONESHOT")]),t._v("设定后，使用带有 "),a("code",[t._v("EPOLL_CTL_MOD")]),t._v("标志的"),a("code",[t._v("epoll_ctl(2)")]),t._v("处理文件句柄就成为调用者必须作的事情。")]),t._v(" "),a("h3",{attrs:{id:"et-lt对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#et-lt对比","aria-hidden":"true"}},[t._v("#")]),t._v(" ET/LT对比")]),t._v(" "),a("p",[t._v("LT(level triggered)是缺省的工作方式，并且同时支持block和no-block socket.在这种做法中，内核告诉你一个文件描述符是否就绪了，然后你可以对这个就绪的fd进行IO操作。如果你不作任何操作，内核还是会继续通知你的，所以，这种模式编程出错误可能性要小一点。传统的select/poll都是这种模型的代表．")]),t._v(" "),a("p",[t._v("ET(edge-triggered)是高速工作方式，只支持no-block socket。在这种模式下，当描述符从未就绪变为就绪时，内核通过epoll告诉你。然后它会假设你知道文件描述符已经就绪，并且不会再为那个文件描述符发送更多的就绪通知，直到你做了某些操作导致那个文件描述符不再为就绪状态了(比如，你在发送，接收或者接收请求，或者发送接收的数据少于一定量时导致了一个EWOULDBLOCK 错误）。但是请注意，如果一直不对这个fd作IO操作(从而导致它再次变成未就绪)，内核不会发送更多的通知(only once),不过在TCP协议中，ET模式的加速效用仍需要更多的benchmark确认（这句话不理解）。")]),t._v(" "),a("p",[t._v("在许多测试中我们会看到如果没有大量的idle -connection或者dead-connection，epoll的效率并不会比select/poll高很多，但是当我们遇到大量的idle- connection(例如WAN环境中存在大量的慢速连接)，就会发现epoll的效率大大高于select/poll。（未测试）")]),t._v(" "),a("p",[t._v("另外，当使用epoll的ET模型来工作时，当产生了一个EPOLLIN事件后，\n读数据的时候需要考虑的是当recv()返回的大小如果等于请求的大小，那么很有可能是缓冲区还有数据未读完，也意味着该次事件还没有处理完，所以还需要再次读取：")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("while")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    buflen "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("recv")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("activeevents"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buf"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buflen "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 由于是非阻塞的模式,所以当errno为EAGAIN时,表示当前缓冲区已无数据可读")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 在这里就当作是该次事件已处理处.")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errno "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" EAGAIN"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buflen "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 这里表示对端的socket已正常关闭.")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buflen "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        rs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 需要再次读取")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n        rs "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("还有，假如发送端流量大于接收端的流量(意思是epoll所在的程序读比转发的socket要快),由于是非阻塞的socket,那么send()函数虽然返回,但实际缓冲区的数据并未真正发给接收端,这样不断的读和发，当缓冲区满后会产生EAGAIN错误(参考man send),同时,不理会这次请求发送的数据.所以,需要封装socket_send()的函数用来处理这种情况,该函数会尽量将数据写完再返回，返回-1表示出错。在socket_send()内部,当写缓冲已满(send()返回-1,且errno为EAGAIN),那么会等待后再重试.这种方式并不很完美,在理论上可能会长时间的阻塞在socket_send()内部,但暂没有更好的办法.")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("ssize_t "),a("span",{attrs:{class:"token function"}},[t._v("socket_send")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sockfd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" buffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size_t buflen"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ssize_t tmp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    size_t total "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" buflen"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("p "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" buffer"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        tmp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("send")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sockfd"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" total"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 当send收到信号时,可以继续写,但这里返回-1.")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errno "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" EINTR"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 当socket是非阻塞时,如返回此错误,表示写缓冲队列已满,")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// 在这里做延时后再重试.")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errno "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" EAGAIN"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token function"}},[t._v("usleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("size_t"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("tmp "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" total"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" buflen"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        total "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        p "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" tmp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tmp"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用注意")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("阻塞的socket在"),a("code",[t._v("epoll_wait")]),t._v("后调用"),a("code",[t._v("accept")]),t._v("，在"),a("code",[t._v("epoll_wait")]),t._v("返回到accept调用这段时间，服务器收到rst报文，会导致调用accept阻塞，直到下一个连接的到来。")])]),t._v(" "),a("li",[a("p",[t._v("stale event")])])])])}],!1,null,null,null);e.options.__file="epoll-intro.md";s.default=e.exports}}]);
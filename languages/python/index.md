# Python

## Syntax

* [字符串的`%`和`.format()`格式化](https://pyformat.info)

* `is` will return `True` if two variables point to the same object, `==` if the objects referred to by the variables are equal.

* id(object)唯一标识一个对象

* 变量作用域：LEGB(Local->函数，def和lambda；Enclosing->闭包，def和lambda；Global->全局，在module里；Buid-in->内置)

* `class.__mro__`继承关系，方法调用顺序

* `__all__`，列表或元组，指出该模块import的时候可以使用哪些对象

* 正无穷和负无穷
```python
float('Inf')
float('-Inf')
```

* 子类初始化父类
```python
# new style class也能用这种方法
class B:
    def __init__(self, s):
        print 'base::init', s

class C(B):
    def __init__(self, s):
        print 'child::init', s
        B.__init__(self, s)

# new style class only
class B(object):
    def __init__(self, s):
        print 'base::init', s

class C(B):
    def __init__(self, s):
        print 'child::init', s
        super(C, self).__init__(s)
```

* getter and setter，不要在构造函数里用这个伪变量，可能会把这个函数覆盖
```python
class C:
    def __init__:
        self._channel
    @property
    def channel(self):
        return self._channel

    @channel.setter
    def channel(self, channel):
        self._channel = channel
```

## Library

* urllib2.unquote(url)

* 进程环境变量
```python
os.environ
```

* any不很错
```python
# ugly
if needle.endswith('ly') or needle.endswith('ed') or 
    needle.endswith('ing') or needle.endswith('ers'):
    print('Is valid')
else:
    print('Invalid')

# pretty
if any([needle.endswith(e) for e in ('ly', 'ed', 'ing', 'ers')]):
    print('Is valid')
else:
    print('Invalid')

# better
if needle.endswith(('ly', 'ed', 'ing', 'ers')):
    print('Is valid')
else:
    print('Invalid')
```

* [`strftime`时间格式化字符串说明](http://strftime.org)

* 给utf8文件写入BOM

```
import codecs
fd.write(codecs.BOM_UTF8)

# 或编码选择'utf-8-sig'
```

* mysql按列名取值
```python
cursor = conn.cursor(MySQLdb.cursors.DictCursor)
cursor.execute("SELECT name, category FROM animal")
result_set = cursor.fetchall()
for row in result_set:
    print "%s, %s" % (row["name"], row["category"])
```

### 实用的`codec`

Codec          | Aliases           | Purpose
---            | ---               | ---
ascii          | 646, us-ascii     | English
gb2312         | chinese           | Simplified Chinese
gbk            | 936, cp936, ms936 | Unified Chinese
utf_8          | U8, UTF, utf8     | all languages
unicode_escape |                   | Encoding suitable as the contents of a Unicode literal in ASCII-encoded Python source code, except that quotes are not escaped. Decodes from Latin-1 source code. Beware that Python source code actually uses UTF-8 by default.
string_escape  |                   | Produce a string that is suitable as string literal in Python source code(Python 2)
base64_codec   | base64, base_64   |
bz2_codec      | bz2               | Compress the operand using bz2 | bz2.compress() / bz2.decompress()
hex_codec      | hex               | Convert operand to hexadecimal representation, with two digits per byte
zlib_codec     | zip, zlib         | Compress the operand using gzip
rot_13         | rot13             | Returns the Caesar-cypher encryption of the operand

## Tips & tricks

* 在交互界面里，`_`保存了最后打印的变量

* 命令行执行程序，比如./server.py，如果提示“: No such file or directory”，可能是因为换行符不是unix格式的

* xml转成dict
```python
def xml2dict(node, dic = {}):
    dic[node.tag] = ndic = {}
    [xml2dict(child, ndic) for child in node.getchildren() if child != node]
    ndic['text'] = node.text.strip()
    return dic

from xml.etree import cElementTree as ET
tree = ET.parse('test.xml')
print xml2dict(tree.getroot())
```

* Python 2 修改默认的unicode和str互转的解码格式
```python
import sys

reload(sys)
sys.setdefaultencoding('UTF-8')
```

* ini to dict
```python
cf = ConfigParser.ConfigParser()
cf.read(filename)
return dict(cf.__dict__['_sections'].copy()) #里面有的value是orderdict
```

* 计算md5和sha1
```python
import hashlib

md5 = hashlib.md5()
md5.update('string to digest')
print md5.hexdigest()

sha = hashlib.sha1()
sha.update('string to digest')
print sha.hexdigest()
```

* base64编解码
```python
import base64
s = 'this is a text'
encstr = base64.encodestring(s)
decstr = base64.decodestring(encstr)
```

* 随机字符
```python
import os
length = 10
print os.urandom(length)
```

* 程序文件所在路径
```python
__file__

# 这种方法能打出行号
from inspect import currentframe, getframeinfo

frameinfo = getframeinfo(currentframe())
print frameinfo.filename, frameinfo.lineno
```

* 异常所在的行号
```python
import sys, os

try:
    raise NotImplementedError("No error")
except Exception as e:
    exc_type, exc_obj, exc_tb = sys.exc_info()
    fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    print(exc_type, fname, exc_tb.tb_lineno)

```

* 列表拷贝
```python
    new_list = old_list[:] # 可读性不太好

    new_list = list(old_list) # 这个很直观

    import copy
    new_list = copy.copy(old_list) # 比list()慢一点，因为需要查出old_list的数据类型

    import copy
    new_list = copy.deepcopy(old_list) # 深度拷贝，更慢，但是有时有必要

    new_list = [x for x in old_list]
```

* 列表清空
```python
    old_list = [1, 2, 3, 4]

    # 方法1
    old_list[:] = []

    # 方法2
    new_list = old_list
    del new_list[:]
```

* 矩阵转置
```python
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
print map(list, zip(*arr))
```

* 列表分成n个元素一组
```python
>>> l = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8]
>>> zip(*([iter(l)] * 3))
[(3, 1, 4), (1, 5, 9), (2, 6, 5), (3, 5, 8)]
```

* 找出文件最长行
```python
max(open('test.txt'), key=len)
```

* 整数所有数字相加之和
```python
sum(map(int, str(n)))
```

* 显示某个文件的汇编代码
```python
python -m dis file.py
```

* 看函数/类的汇编代码
```python
#!/usr/bin/env python
# encoding: utf-8

def f(*args):
    nargs = len(args)
    print nargs, args

class MyObject(object):
    """Example for dis."""

    CLASS_ATTRIBUTE = 'some value'

    def __init__(self, name):
        self.name = name

    def __str__(self):
        return 'MyObject(%s)' % self.name

if __name__ == '__main__':
    import dis
    dis.dis(f)
    dis.dis(MyObject)
```

* 用dis调试
```python
#!/usr/bin/env python
# encoding: utf-8

i = 1
j = 0
k = 3

# ... many lines removed ...

try:
    result = k * (i / j) + (i / k)
except:
    import dis
    import sys
    exc_type, exc_value, exc_tb = sys.exc_info()
    dis.distb(exc_tb)
```

* 把py编译成pyc
```python
python -m py_compile file.py
```

* 最深代码块限制，在python27源代码里看到这段代码
```c
#define CO_MAXBLOCKS 20 /* Max static block nesting within a function */
```

* protobuf的encoder.py里的一段性能优化的注释
```
* We copy any needed global functions to local variables, so that we do not need
  to do costly global table lookups at runtime.
* Similarly, we try to do any attribute lookups at startup time if possible.
* Every field's tag is encoded to bytes at startup, since it can't change at
  runtime.
* Whatever component of the field size we can compute at startup, we do.
* We *avoid* sharing code if doing so would make the code slower and not sharing
  does not burden us too much.  For example, encoders for repeated fields do
  not just call the encoders for singular fields in a loop because this would
  add an extra function call overhead for every loop iteration; instead, we
  manually inline the single-value encoder into the loop.
* If a Python function lacks a return statement, Python actually generates
  instructions to pop the result of the last statement off the stack, push
  None onto the stack, and then return that.  If we really don't care what
  value is returned, then we can save two instructions by returning the
  result of the last statement.  It looks funny but it helps.
```

### 时间戳操作

TODO 
* datetime类型对象和1970年以来的秒数互转，datetime.datetime.now()的返回值是datetime对象，time.time()返回的是1970年到现在的秒数。补充一下，UTC是世界协调时间(对于UTC这个名字的来源无力吐槽，详见维基百科)，虽然GMT时间不再用，但我YY可以把UTC和GMT等同。
```python
import datetime
import time

time.mktime(datetime.datetime.now().timetuple())
datetime.datetime.fromtimestamp(time.time())
```

* time、datetime、str互转
```python
# 把datetime转成字符串
def datetime_toString(dt):
    return dt.strftime("%Y-%m-%d %H:%M:%S")

# 把字符串转成datetime
def string_toDatetime(string):
    return datetime.datetime.strptime(string, "%Y-%m-%d %H:%M:%S")

# 把字符串转成时间戳形式
def string_toTimestamp(strTime):
    return time.mktime(string_toDatetime(strTime).timetuple())

# 把时间戳转成字符串形式
def timestamp_toString(stamp):
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(stamp))

# 把datetime类型转外时间戳形式
def datetime_toTimestamp(dateTim):
    return time.mktime(dateTim.timetuple())

def timestamp_toDatetime(timestamp):
    return datetime.datetime.fromtimestamp(timestamp)
```

* [Why are Python strings immutable?]
   (https://docs.python.org/2/faq/design.html#why-are-python-strings-immutable)
>    There are several advantages.
>
>    One is performance: knowing that a string is immutable
>        means we can allocate space for it at creation time,
>        and the storage requirements are fixed and unchanging.
>        This is also one of the reasons for the distinction between
>        tuples and lists.
>
>    Another advantage is that strings in Python are considered as
>        "elemental" as numbers. No amount of activity will change
>        the value 8 to anything else, and in Python, no amount of
>        activity will change the string “eight” to anything else.

* 神奇的`__debug__`变量能实现`#ifdef`，看[这里](http://stackoverflow.com/questions/12524570/how-do-you-implement-ifdef-in-python)

* Python 2 修改默认的ascii编码转换unicode和str
```python
import sys
reload(sys)
sys.setdefaultencoding('UTF-8')
```

* pip源改成阿里云的镜像源

```ini
; ~/.pip/pip.conf

[global]
trusted-host =  mirrors.aliyun.com
index-url = http://mirrors.aliyun.com/pypi/simple
```

* jupyter同时使用Python2和Python3

```bash
ipython  kernelspec install-self
ipython3 kernelspec install-self
```

* jsonp转json
```python
apijson = jsonp[ jsonp.index("(") + 1 : jsonp.rindex(")") ]
```

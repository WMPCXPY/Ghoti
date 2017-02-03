首先登陆到Cpanel控制面板。
Cpanel的登陆地址为：<http://yourdomain/cpanel/> （请将yourdomain替换成您的域名）

成功登陆后在选择MySQL Database，进入Mysql数据库管理面板（MySQL Account Maintenance）。

在数据库管理面板中，从上到下分成四个部分：
Databases（数据库列表）
Users（用户列表）
Access Hosts（可访问的主机列表）
phpMyAdmin（web界面的数据库管理工具）

您可以通过以下步骤来完成添加数据库：

步 骤一：在Databases中的Db（数据库）旁边的输入框中输入打算使用的数据库的名字，比如DBTest，然后选择Add Db，这样就会生成一个形如"你的Cpanel用户名\_DBTest"的数据库.假设你Cpanel用户名为abc,那么数据库的名字就是 abc_DBTest.

步骤二：在在Users中的UserName（用户名）输入框以及Password（密码）输入框,输入你想设定 的用户名和密码,假定你输入的是userTest,mypassword.点击Add User,将会生成类似abc_userTest的用户名和对应密码mypassword。

步骤三：在Databases栏目从User（用户）以及Db（数据库）两个列表中选择对应的用户名和数据库名，在Privileges（权限）中单选 ALL（全部）， 点击Add User to Db按钮在他们之间建立关联。

这样，你就完成了添加数据库的全部过程。
（注意：本空间数据库主机地址使用localhost，所以你不必关注Add host按钮。）

如果你要安装论坛或者其它的程序，那么，按照上边的假设，你的数据库相关信息将会和下面类似：
数据库主机：localhost
数据库名： abc_DBTest
数据库用户名：abc_userTest
数据库密码：mypassword

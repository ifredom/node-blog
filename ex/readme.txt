### mongodb
    1)安装
        http://www.runoob.com/mongodb/mongodb-tutorial.html
        1. 下载安装包，安装、
        2. 创建数据库目录
        3. 配置数据目录位置mongod.cfg
        ```
            net:
                bindIp: 127.0.0.1
                port: 27017
            systemLog:
                destination: file
                path: c:\mongodb\data\log\mongod.log
            storage:
                dbPath: c:\mongodb\data\db

        ```
        4.执行配置文件，目录位置需要正确  [ "C:\mongodb\bin\mongod.exe" --config "C:\mongodb\mongod.cfg" --install  ]
    2)启动
        net start mongodb
    3)关闭
        net stop mongodb

### nodejs
    开发工具 supervisor,nodemon(推介)
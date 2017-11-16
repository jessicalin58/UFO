# UFO
UFO Data Set

Instruction so far:

1. Check local mysql for database `UFO`
2. run `npm install`
3. `sequelize init:models & sequelize init:config`
4. If the above doesn't work, try `npm install -g sequelize sequelize-cli`
5. run `node server`

Table with content should be created. To import from the UFO dataset on Sequel PRO 
1. Go to UFO database
2. Check you are on the table UFO
3. cmd + shift + i (or File> Import) and select the csv file. 

4. To add an id `ALTER TABLE tbl ADD id INT PRIMARY KEY AUTO_INCREMENT;`
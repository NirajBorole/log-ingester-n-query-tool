# Log ingetser and Query Interface

## Objective 

- To integrate various services and create message queue to analyize and query the various parameter using user interface. Reading logs from various log files stored on local machine. Fetching logs by various parameters like timestamp, date range and metadata, etc.

## Feature

- Full Text Search 
- Regular Expression Search 
- Search from given time range 

## Get started 

Prerequisites

Nodejs
Mongodb
Kafka
Reactjs
Docker

## Install and Usage 

- Clone repository

``` shell

git clone https://github.com/NirajBorole/log-ingester-n-query-tool.git

```

- Install docker and run docker compose command to run container 

```shell

docker compose up

```

-- To run Query interface 

```shell

cd \query-tool
npm install 
npm run dev 

```

- view app on http:localhost:3000






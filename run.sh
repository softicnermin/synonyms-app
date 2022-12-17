#!/bin/bash
environment=local

port=3003

show_help () {
    echo "./run.sh [options] [action]"
    echo ""
    echo "Options:"
    echo " -e environment where all backend calls will land. Could be: local, development, production. Default value: $environment"
    echo " -p port. Default value: $port"
    echo ""
    echo "Actions are defined in package.json. Some of the actions are:"
    echo " start - start in development mode. It sets NODE_ENV=development"
    echo " build - builds and minifies code. It sets NODE_ENV=production. It doesn't start any server."
    echo " test - run all tests"
    echo " prettier - runs prettier on all files"
    exit 1
}

while getopts e:p:h flag
do
    case "${flag}" in
        e) environment=${OPTARG};;
        p) port=${OPTARG};;
        h) show_help;;
    esac
done

action=${@:$OPTIND:1} #can be start, test, build, etc... all actions should be defined in package.json

if [ -z "$action" ]
then
    echo "Please specify the action (execute './run.sh -h' for help)"
    exit 0
fi

api_endpoint=""

case "${environment}" in
    local)
        api_endpoint="http://localhost:3000/api"
    ;;
    development)
        api_endpoint="http://localhost:3000/api"
    ;;
    production)
        api_endpoint="https://synonymapi.onrender.com/api"
    ;;
esac

case "${action}" in
    start)
        public_url="http://localhost:$port/"
    ;;
esac

export PORT=$port
export REACT_APP_API_ENDPOINT=$api_endpoint

echo PORT=$port
echo REACT_APP_API_ENDPOINT=$api_endpoint
echo action=$action

yarn $action
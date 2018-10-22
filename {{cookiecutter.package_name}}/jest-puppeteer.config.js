module.exports = {
  server: {
    command: 'npx http-server -p {{ cookiecutter.test_server_port }} dist',
    port: {{ cookiecutter.test_server_port }}
  }
}

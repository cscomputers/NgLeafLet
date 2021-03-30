export const texts = {

  topNav: {
    title: 'agodata',

    menuDir: {
      listCompanies: 'Empresas',
      buttons: {
        adminArea: 'Área Administrativa',
        logout: 'Encerrar Sistema'
      }
    },
  },

  menu: {
    dashboard: 'Dashboard',
    academic: {
      academic: 'Acadêmico',
      simulationLesson: 'Agendar aulas',
      enrollment: 'Matricular aluno',
      praticalLessonHistory: 'Histórico aulas práticas',
      praticalLessonResult: 'Resultados de aulas',
      praticalLessonRegister: 'Registro manual de aula prática'
    },
    registration: {
      registration: 'Cadastros',
      student: 'Alunos',
      sharedUnit: 'Centros compartilhados',
      drivingSchool: 'CFCs',
      simulatorHistory: 'Histórico de simuladores',
      instructor: 'Instrutores',
      simulators: 'Simuladores',
    },
    configuration: {
      configuration: 'Configuração',
      simulationActivity: 'Atividades',
      simulationModule: 'Módulos',
      simulationEvent: 'Eventos',
      simulationExercise: 'Exercícios',
      holiday: 'Feriados',
      infraction: 'Infrações de trânsito',
      vehicleModel: 'Modelos de veículos',
      userType: 'Perfis de usuário',
      vehicleType: 'Tipos de veículos',
      user: 'Usuários',
      softwareVersion: 'Versões de software de simulação',
      department: 'Departamento de trânsito',
      smtpServer: 'Servidor SMTP',
      system: 'Sistema',
      downloads: 'Downloads'
    },
    consult: {
      consult: 'Consultas',
      userAction: 'Ações de usuários',
      lesson: 'Agendamento de aulas',
      incomes: 'Faturamento',
      creditEntry: 'Extrato de caixa',
      requisition: 'Histórico de requisições',
    },
    financial: {
      financial: 'Financeiro',
      contract: 'Contratos',
      creditEntry: 'Entrada de crédito',
      bonusEntry: 'Entrada de bônus',
      manageCredits: 'Gerenciar créditos',
      manageBonus: 'Gerenciar bônus',
    },
    login: {
      login: 'Login',
      newPass: 'Redefinir senha',
      view: 'Visão',
    },
  },

  login: {

    login: {
      buttons: {
        login: 'Acessar',
        forgotPass: 'Esqueci minha senha',
        rememberMe: 'Lembrar-me',
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        errorPass: 'Senha incorreta.',
        notRegistered: 'CPF não registrado.',
        noCompanyUser: 'Nenhuma empresa relacionada a esse usuário.',
        emailPass: 'Uma mensagem foi enviada para o e-mail cadastrado para esse cpf.'
      },
      fields: {
        cpf: {
          label: 'CPF',
          errors: {
            required: 'Digite o CPF.',
            cpf: 'Digite um CPF válido.',
          }
        },
        password: {
          label: 'Senha',
          errors: {
            required: 'Digite a senha.',
            maxlength: 'A senha não pode ter mais que 100 caracteres.',
          }
        },
      },
      modal: {
        title: 'Redefinir senha',
        subTitle: 'Esqueceu a sua senha?',
        messages: 'Digite o seu CPF e enviaremos instruções para o e-mail cadastrado.',
        buttons: {
          ok: 'Enviar e-mail',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    newPass: {
      title: 'Por favor defina sua nova senha.',
      buttons: {
        save: 'Salvar',
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        passSaved: 'Nova senha registrada.',
      },
      fields: {
        password: {
          label: 'Nova senha',
          errors: {
            required: 'Digite a senha.',
            maxlength: 'A senha não pode ter mais que 100 caracteres.',
          }
        },
        rePass: {
          label: 'Confirme sua senha',
          errors: {
            equalTo: 'A senha deve ser igual nos dois campos.',
          }
        },
      },
    },

    view: {
      title: 'Selecione a visão desejada:',
      buttons: 'Área Administrativa'
    },

  },

  dashboard: {

    dashboard: {
      messages: {
        wellcome: 'Bem vindo.'
      }
    },

    accountsByDrivingSchool: {
      title: {
        accountsByDrivingSchool: 'Créditos por CFC',
        totalCreditsByDrivingSchool: 'Total de Créditos por CFC'
      },
      buttons: {
        recharge: 'Recarregar dados',
        interval: 'Intervalo de atualização ({n} min)'
      },
      fields: {
        drivingSchool: {
          label: 'CFC'
        },
        credits: {
          label: 'Créditos'
        },
        bonusTheorical: {
          label: 'Bônus aulas Teóricas'
        },
        bonusPratical: {
          label: 'Bônus aulas Práticas'
        },
        bonusSimulator: {
          label: 'Bônus aulas em Simulador'
        },
        others: {
          label: 'Outros'
        }
      }
    },

    lastRequisitionSimulators: {
      title: {
        lastRequisitionSimulators: 'Última requisição recebida de simuladores'
      },
      buttons: {
        recharge: 'Recarregar dados',
        interval: 'Intervalo de atualização ({n} min)'
      },
      fields: {
        simulators: {
          label: 'Simulador'
        },
        datetime: {
          label: 'Data/Hora'
        },
        status: {
          label: 'Status'
        }
      }
    },

    lessonsByDrivingSchool: {
      title: {
        lessonsByDrivingSchool: 'Aulas por CFC',
        totalLessonsByDrivingSchool: 'Total de Aulas por CFC',
        settings: 'Configurações'
      },
      buttons: {
        recharge: 'Recarregar dados',
        interval: 'Intervalo de atualização ({n} min)',
        cancel: 'Cancelar',
        save: 'Confimar'
      },
      fields: {
        numberOfDays: {
          label: 'Número de dias',
          errors: {
            required: 'Digite o número de dias.'
          }
        },
        updateInterval: {
          label: 'Intervalo de atualização',
          errors: {
            required: 'Digite o intervalo de atualização.'
          }
        },
        drivingSchool: {
          label: 'CFC'
        },
        scheduled: {
          label: 'Agendadas'
        },
        confirmed: {
          label: 'Confirmadas'
        },
        started: {
          label: 'Iniciadas'
        },
        concluded: {
          label: 'Concluídas'
        },
        canceled: {
          label: 'Canceladas'
        },
        total: {
          label: 'Total'
        },
        others: {
          label: 'Outros'
        }
      }
    }

  },

  academic: {

    enrollment: {
      title: 'Matricular aluno',
      buttons: {
        save: 'Efetuar Matrícula',
        cancel: 'Cancelar'
      },
      messages: {
        saved: 'Salvou dados',
        error: 'Ocorreu um erro no sistema: ',
        noEnrollment: 'Não existe contrato ativo para o CFC com a Categoria informada!'
      },
      fields: {
        student: {
          label: 'Aluno',
          errors: {
            required: 'Um aluno deve ser selecionado.',
          }
        },
        lessons: {
          detran: 'Aulas Detran',
          sparse: 'Aulas Avulsas'
        },
        useBonus: {
          label: 'Debitar valor do bônus?'
        },
        lessonsCategory: {
          label: 'Categoria das aulas',
          options: [
            {id: 1, value:'Prática'},
            {id: 2, value:'Simulador'}
          ],
          errors: {
            required: 'A categoria das aulas deve ser selecionada.',
          }
        },
        lessonsType: {
          label: 'Tipo das aulas',
          options: [
            {id:0 , value:'Aulas Detran'},
            {id:1 , value:'Aulas Avulsas'},
            {id:2 , value:'Aulas Livres'}
          ],
          errors: {
            required: 'O tipo das aulas deve ser selecionado.',
          }
        },
        numLessonsLoaded: {
          label: {
            numberLessons: 'Quantidade de aulas',
          },
          errors: {
            required: 'Esse campo não pode ficar vazio.',
            maxlength: 'Esse campo não pode ter mais que 6 caracteres.',
            maxlength2: 'Esse campo não pode ter mais que 2 caracteres.',
            min: 'Esse campo deve ser maior que 0.'
          }
        },
        paymentMethod: {
          label: 'Forma de pagamento',
          options: [
            {id:0 , value:'Debitar do Caixa (disponível {value})'},
            {id:1 , value:'Debitar Bônus (disponível {bonus} Aula(s))'}
          ],
          errors: {
            required: 'A forma de pagamento deve ser selecionada.',
          }
        },
        departmentProcessNumber: {
          label: 'Nº processo',
          errors: {
            required: 'O número do processo não pode ficar vazio.',
            maxlength: 'O número do processo não pode ter mais que 50 caracteres.',
          }
        },
        paymentValue: {
          label: 'Valor total da matrícula',
        },
        enrollmentValue: {
          label: '{result} (Valor por aula: {value})'
        }
        // totalValueOfContract: {
        //   label: 'Valor total do contrato (Aluno)'
        // },
      },
      modal: {
        title: 'Confirmação de matrícula',
        messages: 'Aluno matrículado com sucesso! Gerado número de matrícula {number}.',
        buttons: {
          ok: 'OK',
          cancel: null,
          close: 'Fechar'
        }
      }
    },

    simulationLesson: {
      title: {
        list: 'Agendar aulas em Simulador',
        view: 'Consultar Agendamento de Aula',
        tab1: 'Em Simuladores',
        tab2: 'Em Veículos'
      },
      h3: 'Agenda',
      pAvaliableLessons: 'Aulas Disponíveis: (Arraste a aula para a agenda)',
      buttons: {
        save: 'Confirmar',
        cancel: 'Cancelar',
        close: 'Fechar',
        cancelSchedule: 'Cancelar Agendamento',
        getScheduleDetran: 'Atualizar agenda do aluno'
      },
      messages: {
        saved: 'Salvou dados',
        error: 'Ocorreu um erro no sistema: ',
        deleted: 'Aula Cancelada',
        scheduleAlert: {
          olderDate: 'Não é possível agendar a aula para uma data/hora que já passou.',
          overlappingLesson: 'Não é possível uma aula sobre outra.',
          simultaneousLessonsPerStudent: 'Não é possível agendar aulas para um aluno em simuladores diferentes ao mesmo tempo.',
          maxSimultaneousLessonsPerInstructor: 'O máximo de aulas simultâneas permitidas para o instrutor é de {n} aulas.',
          maxNumFreeLessonsPerDay: 'O máximo de aulas livres permitidas por dia é de {n} aulas.',
          maxNumLessonsPerDayPerStudent: 'O máximo de aulas por dia para um mesmo aluno é de {n} aulas.',
          maxNumLessonsInSequencePerStudent: 'O máximo de aulas em sequência para um mesmo aluno é de {n} aulas.',
          minIntervalBetweenLessonsSequence: 'O intervalo mínimo entre sequências de aulas é de {n} minutos.',
          refreshLesson: 'Agenda atualizada para hoje.',
          notRefreshLesson: 'Não houve atualização na agenda do dia.',
          studentAlreadyHaveLesson: 'O Aluno selecionado já possui uma aula {n} agendada no mesmo horário.',
          instructorAlreadyHaveLesson: 'O Instrutor selecionado já uma possui aula {n} agendada no mesmo horário.'
        }
      },
      fields: {
        drivingSchoolId: {
          label: 'CFC',
          errors: {
            required: 'Um cfc deve ser selecionado.',
          }
        },
        studentId: {
          label: 'Aluno',
          errors: {
            required: 'Um aluno deve ser selecionado.',
          }
        },
        instructorId: {
          label: 'Instrutor',
          errors: {
            required: 'Um instrutor deve ser selecionado.',
          }
        },
        moduleId: {
          label: 'Módulo',
          errors: {
            required: 'Um módulo deve ser selecionado.',
          }
        },
        vehicleModelId: {
          label: 'Modelo do Veículo',
          errors: {
            required: 'Um modelo de veículo deve ser selecionado.',
          }
        },
        date: {
          label: 'Data',
          errors: {
            required: 'A hora de inicio não pode ficar vazio.',
          }
        },
        lessonType: {
          label: 'Tipo da Aula',
          options: {
            0: 'Aula Detran',
            1: 'Aula Avulsa',
            2: 'Aula Livre'
          },
          errors: {
          }
        },
        simulatorId: {
          label: 'Simulador',
          errors: {
          }
        },
        period: {
          label: {
            period: 'Período',
            at: 'às'
          },
          errors: {
            required: 'O horário de início deve ser definido.',
          }
        },
        situation: {
          label: 'Situação'
        }
      },
      modal: {
        title: 'Cancelar agendamento',
        messages: 'Deseja realmente cancelar o agendamento?',
        buttons: {
          ok: 'Sim, efetuar o cancelamento',
          cancel: 'Desistir',
          close: 'Fechar'
        }
      }
    },

    praticalLesson: {
      title: {
        list: 'Agendar aulas Práticas',
        view: 'Consultar Agendamento de Aula',
        tab1: 'Em Simuladores',
        tab2: 'Em Veículos'
      },
      h3: 'Agenda',
      pAvaliableLessons: 'Aulas Disponíveis: (Arraste a aula para a agenda)',
      buttons: {
        save: 'Confirmar',
        cancel: 'Cancelar',
        close: 'Fechar',
        cancelSchedule: 'Cancelar Agendamento',
        getScheduleDetran: 'Atualizar agenda do aluno'
      },
      messages: {
        saved: 'Salvou dados',
        error: 'Ocorreu um erro no sistema: ',
        deleted: 'Aula Cancelada',
        scheduleAlert: {
          olderDate: 'Não é possível agendar a aula para uma data/hora que já passou.',
          overlappingLesson: 'Não é possível uma aula sobre outra.',
          simultaneousLessonsPerStudent: 'Não é possível agendar aulas para um aluno em veículos diferentes ao mesmo tempo.',
          maxSimultaneousLessonsPerInstructor: 'O máximo de aulas simultâneas permitidas para o instrutor é de {n} aulas.',
          maxNumFreeLessonsPerDay: 'O máximo de aulas livres permitidas por dia é de {n} aulas.',
          maxNumLessonsPerDayPerStudent: 'O máximo de aulas por dia para um mesmo aluno é de {n} aulas.',
          maxNumLessonsInSequencePerStudent: 'O máximo de aulas em sequência para um mesmo aluno é de {n} aulas.',
          minIntervalBetweenLessonsSequence: 'O intervalo mínimo entre sequências de aulas é de {n} minutos.',
          refreshLesson: 'Agenda atualizada para hoje.',
          notRefreshLesson: 'Não houve atualização na agenda do dia.',
          studentAlreadyHaveLesson: 'O Aluno selecionado já possui uma aula {n} agendada no mesmo horário.',
          instructorAlreadyHaveLesson: 'O Instrutor selecionado já uma possui aula {n} agendada no mesmo horário.'
        }
      },
      fields: {
        drivingSchoolId: {
          label: 'CFC',
          errors: {
            required: 'Um cfc deve ser selecionado.',
          }
        },
        adapted: "Adaptado",
        studentId: {
          label: 'Aluno',
          errors: {
            required: 'Um aluno deve ser selecionado.',
          }
        },
        instructorId: {
          label: 'Instrutor',
          errors: {
            required: 'Um instrutor deve ser selecionado.',
          }
        },
        moduleId: {
          label: 'Módulo',
          errors: {
            required: 'Um módulo deve ser selecionado.',
          }
        },
        vehicleModelId: {
          label: 'Modelo do Veículo',
          errors: {
            required: 'Um modelo de veículo deve ser selecionado.',
          }
        },
        date: {
          label: 'Data',
          errors: {
            required: 'A hora de inicio não pode ficar vazia.',
          }
        },
        lessonType: {
          label: 'Tipo da Aula',
          options: {
            0: 'Aula Detran',
            1: 'Aula Avulsa',
            2: 'Aula Livre'
          },
          errors: {
          }
        },
        vehicleId: {
          label: 'Veículo',
          errors: {
          }
        },
        vehicleType: {
          label: 'Tipo de veículo',
          errors: {
            required: 'O tipo de veículo não pode ficar vazio.',
          }
        },
        period: {
          label: {
            period: 'Período',
            at: 'às'
          },
          errors: {
            required: 'O horário de início deve ser definido.',
          }
        },
        situation: {
          label: 'Situação'
        }
      },
      modal: {
        title: 'Cancelar agendamento',
        messages: 'Deseja realmente cancelar o agendamento?',
        buttons: {
          ok: 'Sim, efetuar o cancelamento',
          cancel: 'Desistir',
          close: 'Fechar'
        }
      }
    },

    praticalLessonResult: {

      title: 'Resultados de aulas práticas',
      buttons: {
        search: 'Pesquisar'
      },
      fields: {
        id: {
          label: 'Id',
        },
        initialDate: {
          label: 'Data inicial',
          errors: {
            required: 'A data inicial não pode ficar vazia.'
          }
        },
        finalDate: {
          label: 'Data final',
          errors: {
            required: 'A data final não pode ficar vazia.',
            bigger: 'A data final deve ser maior que a data inicial.'
          }
        },
        dateScheduled: {
          label: 'Data agendada'
        },
        student: {
          label: 'Aluno'
        },
        cpf: {
          label: 'CPF'
        },
        instructor: {
          label: 'Instrutor'
        },
        vehicle: {
          label: 'Veículo'
        },
        vehicleType: {
          label: 'Tipo de veículo'
        },
        result: {
          label: 'Resultado'
        },
        status: {
          label: 'Status',
          options: {
            0: 'Todos'
          }  
        },
      },
      messages: {
        notFound: 'Nenhum registro encontrado',
        error: 'Ocorreu um erro ao consultar os dados'
      }
    },

    praticalLessonDetail: {
      title: 'Detalhe aula prática',
      tabs: {
        tab1: 'Comportamento',
        tab2: 'Avaliação',
        tab3: 'Infração',
        tab4: 'Faltas',
        tab5: 'Conteúdo Programático',
      },
      track: 'Percurso',
      occurrences: 'Eventos registrados em aula',
      facialBiometry: 'Biometria facial',
      digitalBiometry: 'Biometria digital',
      photos: 'Fotos',
      video: 'Vídeo',
      buttons: {
        back: 'voltar'
      },
      noData: 'Não há registros.',
      fields: {
        student: {
          label: 'Aluno'
        },
        instructor: {
          label: 'Instrutor'
        },
        vehicle: {
          label: 'Veículo'
        },
        startLesson: {
          label: 'Início de aula'
        },
        endLesson: {
          label: 'Fim de aula'
        },
        distance: {
          label: 'Distância percorrida'
        },
        lessonPoints: {
          label: 'Pontuação obtida em aula'
        },
        module: {
          label: 'Módulo'
        },
        entrance: {
          label: 'Entrada'
        },
        exit: {
          label: 'Saída'
        },
        code: {
          label: 'Código'
        },
        category: {
          label: 'Tipo de registro'
        },
        description: {
          label: 'Descrição'
        },
        dateTime: {
          label: 'Data / Hora'
        },
        checked: {
          label: 'Realizado'
        }
      },
      messages: {
        noPhotos: 'Fotos não encontradas.',
        noVideo: 'Vídeo não encontrado.',
        noBiometry: 'Dados biométricos não encontrados.'
      }
    },

    praticalLessonRegister: {
      title: 'Registro manual de aula prática',
      list: 'Aulas agendadas',
      buttons: {
        search: 'Pesquisar'
      },
      fields: {
        id: {
          label: 'Id',
        },
        date: {
          label: 'Data / Hora',
          errors: {
            required: 'A Data / Hora não pode ficar vazia.',
            bigger: 'A Data / Hora selecionada não pode ser superior a data de hoje.'
          }
        }, 
        filter: 'pesquisar',
        dateScheduled: {
          label: 'Data agendada'
        },
        student: {
          label: 'Aluno'
        },
        cpf: {
          label: 'CPF'
        },
        instructor: {
          label: 'Instrutor'
        },
        vehicle: {
          label: 'Veículo'
        },
        vehicleType: {
          label: 'Tipo de veículo'
        },
        status: {
          label: 'Status'
        }
      },
      messages: {
        notFound: 'Nenhum registro encontrado',
        error: 'Ocorreu um erro ao consultar os dados',
        deleted: 'Ítem excluído com sucesso!',
        saved: 'Salvou dados'
      },
      manualRegistration: {
        title: {
          new: 'Novo registro manual de aula prática',
          edit: 'Editar registro manual de aula prática'  
        },
        table: {
          title: {
            occurrences: 'Registro de ocorrências',
            type: 'Tipo',
            description: 'Descrição',
            register: 'Registrar',
            registered: 'Lista de ocorrências Registradas',
            select: 'Selecione uma orcorrência em aula para apresentar a lista.',
            notRegistred: 'Não há registros.'
          },
          head: {
            code: 'Código',
            description: 'Descrição',
            result: 'Resultado'
          }
        },
        fields: {
          justificative: {
            label: 'Justificativa',
            errors: {
              required:'A justificativa não pode ficar vazia.'
            }
          },
          initialMileage : {
            label: 'Quilometragem inicial do veículo',
            errors: {
              initialBiggerThanFinal: 'A quilometragem inicial deve ser menor que a final.',
              required:'A quilometragem inicial não pode ficar vazia.'
            }
          },
          finalMileage : {
            label: 'Quilometragem final do veículo',
            errors: {
              required:'A quilometragem final não pode ficar vazia.'
            }
          },
          observation: {
            label: 'Observação'
          },
          occurrencesSelection: {
            label: 'Ocorrências em aula',
          },
          eventGroup: {
            label: 'Grupo de ocorrências'
          },
          eventType: {
            label: 'Tipos de ocorrência'
          },
          occurrences: {
            errors: {
              required:'A lista de ocorrências registradas não pode ficar vazia.'
            }
          }               
        },
        buttons: {
          save: 'Salvar',
          cancel: 'Voltar',
          search: 'Pesquisar'
        },
        tooltip: {
          remove: 'Remover ítem da lista'
        }
      },
      modal: {
        title: {
          delete: 'Excluir ocorrência',
          deletemanualRegistration: 'Excluir registro manual de aula prática'
        },
        messages: {
          delete: 'Tem certeza que deseja excluir esta ocorrência?',
          deletemanualRegistration: 'Tem certeza que deseja excluir o registro manual desta aula prática?'
        },
        buttons: {
          ok: 'Excluir',
          cancel: 'Cancelar'
        }
      }
    }

  },

  registration: {

    simulators: {
      title: {
        new: 'Novo Simulador',
        edit: 'Editar Simulador',
        list: 'Simuladores',
      },
      buttons: {
        new: 'Adicionar novo Simulador',
        save: 'Salvar',
        cancel: 'Cancelar'
      },
      messages: {
        added: 'Simulador adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O simulador não pode ser excluído pois possui registros vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        active: {
          label: 'Ativo',
        },
        name: {
          label: 'Nome',
          errors: {
            required: 'O nome não pode ficar vazio.',
            maxlength: 'O nome não pode ter mais que 40 caracteres.',
          }
        },
        serialNumber: {
          label: 'Número de série',
          errors: {
            required: 'O número de série não pode ficar vazio.',
            maxlength: 'O número de série não pode ter mais que 20 caracteres.',
          }
        },
        vehicleType: {
          label: 'Tipo de veículo',
          errors: {
            required: 'O tipo de veículo não pode ficar vazio.',
          }
        },
      },
      modal: {
        title: 'Excluir Simulador',
        messages: 'Tem certeza que deseja excluir esse simulador?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    drivingSchool: {
      title: {
        new: 'Novo CFC',
        edit: 'Editar CFC',
        list: 'CFCs',
      },
      h3: 'Endereço',
      buttons: {
        new: 'Adicionar novo CFC',
        save: 'Salvar',
        cancel: 'Cancelar'
      },
      messages: {
        added: 'CFC adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        errorCep: 'Ocorreu um erro ao carregar os dados do endereço. Por favor tente novamente mais tarde.',
        invalidCep: 'Cep inválido',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'Este CFC não pode ser excluído pois possui registros vinculados!',
        saved: 'Salvou dados',
        cnpjUsed: 'Este CNPJ já esta cadastrado no sistema!',
      },
      fields: {
        filter: 'Filtrar',
        cnpj: {
          label: 'CNPJ',
          errors: {
            required: 'O cnpj não pode ficar vazio.',
            maxlength: 'O cnpj não pode ter mais que 18 caracteres.',
            cnpj: 'Digite um cnpj válido.',
          }
        },
        identifierOnDepartment: {
          label: 'Identificação no departamento',
          errors: {
            required: 'A identificação no departamento não pode ficar vazio.',
            maxlength: 'A identificação no departamento não deve ser maior que 11 caracteres.',
          }
        },
        name: {
          label: 'Razão social',
          errors: {
            required: 'A razão social não pode ficar vazio.',
            maxlength: 'A razão social não pode ter mais que 100 caracteres.',
          }
        },
        tradingName: {
          label: 'Nome fantasia',
          errors: {
            required: 'O nome fantasia não pode ficar vazio.',
            maxlength: 'O nome fantasia não pode ter mais que 100 caracteres.',
          }
        },
        stateRegistration: {
          label: 'Inscrição estadual',
          errors: {
            required: 'A inscrição estadual não pode ficar vazio.',
            maxlength: 'A inscrição estadual não pode ter mais que 30 caracteres.',
          }
        },
        email: {
          label: 'E-mail',
          errors: {
            required: 'O e-mail não pode ficar vazio.',
            maxlength: 'O e-mail não pode ter mais que 100 caracteres.',
            email: 'Por favor digite um e-mail válido.',
          }
        },
        phoneNumber: {
          label: 'Telefone',
          errors: {
            required: 'O telefone não pode ficar vazio.',
            maxlength: 'O telefone não pode ter mais que 15 caracteres.',
          }
        },
        zipcode: {
          label: 'CEP',
          errors: {
            required: 'O cep não pode ficar vazio.',
            maxlength: 'O cep não pode ter mais que 9 caracteres.',
          }
        },
        street: {
          label: 'Endereço',
          errors: {
            required: 'O logradouro não pode ficar vazio.',
            maxlength: 'O logradouro não pode ter mais que 200 caracteres.',
          }
        },
        number: {
          label: 'Número',
          errors: {
            required: 'O número não pode ficar vazio.',
            maxlength: 'O número não pode ter mais que 20 caracteres.',
          }
        },
        complement: {
          label: 'Complemento',
          errors: {
            maxlength: 'O complemento não pode ter mais que 50 caracteres.',
          }
        },
        cityArea: {
          label: 'Bairro',
          errors: {
            required: 'O bairro não pode ficar vazio.',
            maxlength: 'O bairro não pode ter mais que 100 caracteres.',
          }
        },
        city: {
          label: 'Município',
          errors: {
            required: 'Um município deve ser selecionado.',
          }
        },
      },
      modal: {
        title: 'Excluir CFC',
        messages: 'Tem certeza que deseja excluir esse CFC?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    sharedUnit: {
      title: {
        new: 'Novo Centro compartilhado',
        edit: 'Editar Centro compartilhado',
        list: 'Centros compartilhados',
      },
      h3: {
        adress: 'Endereço',
        permission: 'Autorizações'
      },
      buttons: {
        new: 'Adicionar novo Centro compartilhado',
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      messages: {
        added: 'Centro compartilhado adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O Centro compartilhado não pode ser excluído pois possui simuladores vinculados!',
        saved: 'Salvou dados',
        cnpjUsed: 'Este CNPJ já esta cadastrado no sistema!',
        errorCep: 'Ocorreu um erro ao carregar os dados do endereço. Por favor tente novamente mais tarde.',
        invalidCep: 'Cep inválido',
      },
      fields: {
        filter: 'Filtrar',
        cnpj: {
          label: 'CNPJ',
          errors: {
            required: 'O cnpj não pode ficar vazio.',
            maxlength: 'O cnpj não pode ter mais que 18 caracteres.',
            cnpj: 'Digite um cnpj válido.',
          }
        },
        name: {
          label: 'Razão social',
          errors: {
            required: 'A razão social não pode ficar vazio.',
            maxlength: 'A razão social não pode ter mais que 100 caracteres.',
          }
        },
        tradingName: {
          label: 'Nome fantasia',
          errors: {
            required: 'O nome fantasia não pode ficar vazio.',
            maxlength: 'O nome fantasia não pode ter mais que 100 caracteres.',
          }
        },
        stateRegistration: {
          label: 'Inscrição estadual',
          errors: {
            required: 'A inscrição estadual não pode ficar vazio.',
            maxlength: 'A inscrição estadual não pode ter mais que 30 caracteres.',
          }
        },
        email: {
          label: 'E-mail',
          errors: {
            required: 'O e-mail não pode ficar vazio.',
            maxlength: 'O e-mail não pode ter mais que 100 caracteres.',
            email: 'Por favor digite um e-mail válido.',
          }
        },
        phoneNumber: {
          label: 'Telefone',
          errors: {
            required: 'O telefone não pode ficar vazio.',
            maxlength: 'O telefone não pode ter mais que 15 caracteres.',
          }
        },
        zipcode: {
          label: 'CEP',
          errors: {
            required: 'O cep não pode ficar vazio.',
            maxlength: 'O cep não pode ter mais que 9 caracteres.',
          }
        },
        street: {
          label: 'Endereço',
          errors: {
            required: 'O logradouro não pode ficar vazio.',
            maxlength: 'O logradouro não pode ter mais que 200 caracteres.',
          }
        },
        number: {
          label: 'Número',
          errors: {
            required: 'O número não pode ficar vazio.',
            maxlength: 'O número não pode ter mais que 20 caracteres.',
          }
        },
        complement: {
          label: 'Complemento',
          errors: {
            maxlength: 'O complemento não pode ter mais que 50 caracteres.',
          }
        },
        cityArea: {
          label: 'Bairro',
          errors: {
            required: 'O bairro não pode ficar vazio.',
            maxlength: 'O bairro não pode ter mais que 100 caracteres.',
          }
        },
        city: {
          label: 'Município',
          errors: {
            required: 'Um município deve ser selecionado.',
          }
        },
        relatedDrivingSchools: {
          label: 'CFCs autorizados',
          errors: {
            required: 'Pelo menus um CFC deve ser selecionado.',
          }
        },
        scheduleAccessEnabled: {
          label: 'CFCs podem acessar agenda de aulas:',
          errors: {}
        },
        scheduleAccessReadOnly: {
          label: {
            true: 'Somente visualização da agenda',
            false: 'Efetuar agendamentos de aulas'
          },
          errors: {}
        },
      },
      modal: {
        title: 'Excluir Centro compartilhado',
        messages: 'Tem certeza que deseja excluir esse Centro compartilhado?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    simulatorHistory: {
      title: {
        new: 'Novo Histórico de simulador',
        edit: 'Editar Histórico de simulador',
        list: 'Histórico de simuladores',
      },
      h3: {
        simulators: 'Simuladores:',
        history: 'Histórico:',
        simulatorLists: 'Simuladores',
      },
      buttons: {
        new: 'Adicionar novo Histórico de simulador',
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      messages: {
        added: 'Histórico de simulador adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O histórico não pode ser excluído pois possui registros vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        serialNumber: {
          label: 'Número de série',
          errors: {
            required: 'O número de série deve ser selecionado.',
          }
        },
        startDate: {
          label: 'Data Início',
          errors: {
            required: 'A data de início não pode ficar vazia.',
          }
        },
        endDate: {
          label: 'Data Término',
          errors: {
            required: 'A data término não pode ficar vazia.',
            bigger: 'A data de término deve ser maior que a data de início.'
          }
        },
        actual: {
          label: 'Vigente',
          errors: {
          }
        },
        company: {
          label: {
            local: 'Alocação',
            drivingSchool: 'CFC',
            sharedUnit: 'Centro compartilhado'
          },
          errors: {
            required: 'Uma alocação deve ser selecionada.',
          }
        },
        softwareVersion: {
          label: 'Versão de software',
          errors: {
            required: 'Uma versão de software deve ser selecionado.',
          }
        },
      },
      modal: {
        title: 'Excluir Histórico de simulador',
        messages: 'Tem certeza que deseja excluir esse Histórico de simulador?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    student: {
      title: {
        list: 'Alunos',
        new: 'Novo Aluno',
        edit: 'Editar Aluno',
      },
      tooltip: {
        edit: 'Editar',
        delete: 'Excluir',
        enrollment: 'Matricular',
        enrollmentConsult: 'Consultar matrículas',
      },
      h3: {
        personalData: 'Dados pessoais',
        identityDoc: 'Documento de identidade',
        contactInfo: 'Informações para contato'
      },
      buttons: {
        new: 'Adicionar novo Aluno',
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        canceled: 'Matrícula cancelada.',
        saved: 'Salvou dados',
        notDeleted: 'O aluno não pode ser excluído pois possui matrículas vinculadas!',
        errorCep: 'Ocorreu um erro ao carregar os dados do endereço. Por favor tente novamente mais tarde.',
        invalidCep: 'Cep inválido',
      },
      fields: {
        filter: 'Filtrar',
        colName: {
          label: 'Nome'
        },
        lessons: {
          detran: 'Aulas Detran',
          sparse: 'Aulas Avulsas'
        },
        colBirth: {
          label: 'Nascimento'
        },
        cpf: {
          label: 'CPF',
          errors: {
            required: 'O CPF não pode ficar vazio.',
            maxlength: 'O CPF não pode ter mais que 14 caracteres.',
            cpf: 'Por favor digite um CPF válido.',
          }
        },
        renach: {
          label: 'RENACH',
          errors: {
            required: 'O RENACH não pode ficar vazio.',
            maxlength: 'O RENACH não pode ter mais que 15 caracteres.',
          }
        },
        name: {
          label: 'Nome completo',
          errors: {
            required: 'O nome não pode ficar vazio.',
            maxlength: 'O nome não pode ter mais que 255 caracteres.',
          }
        },
        email: {
          label: 'E-mail',
          errors: {
            maxlength: 'O e-mail não pode ter mais que 100 caracteres.',
            email: 'Por favor digite um e-mail válido.',
          }
        },
        birthDate: {
          label: 'Data de nascimento',
          errors: {
          }
        },
        gender: {
          label: {
            sex: 'Sexo',
            m: 'Masculino',
            f: 'Feminino'
          },
          errors: {
          }
        },
        rg: {
          label: 'RG',
          errors: {
            maxlength: 'O RG não pode ter mais que 20 caracteres.',
          }
        },
        rgExpeditionAgency: {
          label: 'Órgão de expedição',
          errors: {
            maxlength: 'O órgão de expedição não pode ter mais que 20 caracteres.',
          }
        },
        rgState: {
          label: 'UF',
          errors: {
          }
        },
        rgExpeditionDate: {
          label: 'Data de expedição',
          errors: {
          }
        },
        zipcode: {
          label: 'CEP',
          errors: {
            required: 'O cep não pode ficar vazio.',
            maxlength: 'O CEP não pode ter mais que 9 caracteres.',
          }
        },
        street: {
          label: 'Logradouro',
          errors: {
            required: 'O logradouro não pode ficar vazio.',
            maxlength: 'O logradouro não pode ter mais que 200 caracteres.',
          }
        },
        number: {
          label: 'Número',
          errors: {
            required: 'O número não pode ficar vazio.',
            maxlength: 'O número não pode ter mais que 20 caracteres.',
          }
        },
        complement: {
          label: 'Complemento',
          errors: {
            maxlength: 'O complemento não pode ter mais que 50 caracteres.',
          }
        },
        cityArea: {
          label: 'Bairro',
          errors: {
            required: 'O bairro não pode ficar vazio.',
            maxlength: 'O bairro não pode ter mais que 100 caracteres.',
          }
        },
        city: {
          label: 'Município',
          errors: {
            required: 'O município deve ser selecionado.',
          }
        },
        phoneNumber: {
          label: 'Telefone fixo',
          errors: {
            maxlength: 'O telefone não pode ter mais que 14 caracteres.',
          }
        },
        cellPhoneNumber: {
          label: 'Telefone celular',
          errors: {
            maxlength: 'O telefone não pode ter mais que 15 caracteres.',
          }
        },
      },
      modal: {
        title: {
          cancel: 'Confirmar cancelamento de matrícula',
          delete: 'Excluir Aluno',
          list: 'Matrículas do aluno'
        },
        messages: {
          cancelDetran:      `Confirma cancelamento da matrícula {enrollment} do
                             aluno {student} realizada em {date} às {hour}
                             referente a {temp} H/A de aulas tipo Aulas Detran? As
                             aulas contratadas serão convertidas em bônus
                             que podem ser utilizados em novas matrículas.`,
          cancelSingleClass: `Confirma o cancelamento da matrícula {enrollment}
                             do aluno {student} realizada em {date} às {hour} referente
                             a {temp} H/A de aulas tipo Aulas Avulsas? No caso da
                             identificação do pagamento do boleto referente a esta
                             matrícula, o valor pago ficará disponível em caixa para
                             utilização em novas matrículas.`,
          cancelFreeClass:   `Confirma o cancelamento da matrícula {enrollment} do
                             aluno {student} realizada em {date} às {hour} referente
                             a {temp} H/A de aulas tipo Aulas Livres?`,
          delete: 'Tem certeza que deseja excluir esse aluno?',
        },
        fields: {
          colNumEnrollment: {
            label: 'Matrícula'
          },
          colDate: {
            label: 'Data'
          },
          colLessonsType: {
            label: 'Tipo aulas',
            options: {
              0: 'Aulas Detran',
              1: 'Aulas Avulsas',
              2: 'Aulas Livres'
            },
          },
          colLessonsCategory: {
            label: 'Categoria',
            options: [
              {id: 1, value:'Prática'},
              {id: 2, value:'Simulador'}
            ]
          },
          colNumLessonsLoaded: {
            label: 'Quantidade de aulas'
          },
          colpaymentMethod: {
            label: 'Pagamento',
            options: {
              0: 'Débito em Caixa',
              1: 'Débito em Bônus'
            }
          },
        },
        buttons: {
          cancel: 'Cancelar',
          confirm: 'Confirmar',
          ok: 'OK',
          close: 'Fechar'
        },
      }
    },

    vehicle: {
      title: {
        list: 'Veículos',
        new: 'Novo Veículo',
        edit: 'Editar Veículo',
      },
      buttons: {
        new: 'Adicionar novo Veículo',
        save: 'Salvar',
        cancel: 'Cancelar',
      }, 
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.',
        deleted: 'Excluído com sucesso.',
        saved: 'Salvou dados',
        notDeleted: 'O veículo não pode ser excluído, pois possui agendamentos vinculados.',
        plateAlreadyExists: 'Já existe um veículo cadastrado com a placa informada.'
      },
      fields: {
        filter: 'Filtrar',
        active: {
          label: 'Ativo',
        },
        adapted: {
          label: 'Veículo adaptado'
        },
        shared: {
          label: 'Compartilhado',
        },
        plate: {
          label: 'Placa',
          errors: {
            required: 'O número da placa não pode ficar vazio.',
            maxlength: 'O número da placa não pode ter mais que 7 caracteres.',
          }
        },
        manufacturer: {
          label: 'Fabricante',
          errors: {
            required: 'O fabricante não pode ficar vazio.',
            maxlength: 'O fabricante não pode ter mais que 30 caracteres.',
          }
        },
        model: {
          label: 'Modelo',
          errors: {
            required: 'O modelo do veículo não pode ficar vazio.',
            maxlength: 'A modelo não pode ter mais que 30 caracteres.',
          }
        },
        color: {
          label: 'Cor',
          errors: {
            required: 'A cor do veículo não pode ficar vazia.',
          }
        },
        vehicleType: {
          label: 'Tipo de veículo',
          errors: {
            required: 'O tipo de veículo não pode ficar vazio.',
          }
        },
        year: {
          label: 'Ano',
          errors: {
            required: 'O Ano do veículo não pode ficar vazio.',
            maxlength: 'O Ano não pode ter mais que 4 caracteres.',
          }
        },
      },
      tooltip: {
        adapted: 'Veículo adaptado',
        edit: 'Editar',
        delete: 'Excluir'
      },
      modal: {
        title: 'Excluir Veículo',
        messages: 'Tem certeza que deseja excluir este veículo?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    deviceKit: {
      title: {
        list: 'Kits de dispositivos',
        new: 'Novo Kit',
        edit: 'Editar Kit',
        id : 'ID',
      },
      buttons: {
        new: 'Adicionar novo Kit',
        save: 'Salvar',
        cancel: 'Cancelar',
      }, 
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.',
        deleted: 'Excluído com sucesso.',
        saved: 'Salvou dados',
        notDeleted: 'O Kit não pode ser excluído pois possui dispositivos vinculados!',
      },
      fields: {
        filter: 'Filtrar',
        active: {
          label: 'Ativo',
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 30 caracteres.',
          }
        },
      },
      modal: {
        title: 'Excluir Kit',
        title_sucess: 'Confirmação de cadastro de kit',
        messages: 'Tem certeza que deseja excluir este kit?',
        message_success: 'Kit cadastrado com sucesso! Gerado o ID número {number}',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    vehicleKit: {
      title: {
        list: 'Kits veiculares',
        new: 'Novo Kit veicular',
        edit: 'Editar Kit veicular',
        cfc : 'CFC',
        kit : 'Kit',
        plate : 'Placa',
        model : 'Modelo',
        manufacturer: 'Fabricante',
        status: 'Ativo',
        type: 'Tipo',
        description: 'Descrição'
      },
      buttons: {
        new: 'Adicionar novo Kit veicular',
        save: 'Salvar',
        cancel: 'Cancelar',
      }, 
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.',
        deleted: 'Excluído com sucesso.',
        saved: 'Salvou dados'
      },
      fields: {
        filter: 'Filtrar',
        active: {
          label: 'Ativo',
        },
        vehicle: {
          label: 'Veículo',
          errors: {
            required: 'O veículo não pode ficar vazio.',
          }
        },
        deviceKit: {
          label: 'Kit',
          errors: {
            required: 'O kit não pode ficar vazio.',
          }
        },
        drivingSchool: {
          label: 'CFC',
          errors: {
            required: 'O CFC não pode ficar vazio.',
          }
        },
      },
      modal: {
        title: 'Excluir Kit Veicular',
        messages: 'Tem certeza que deseja excluir este kit veicular?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      },
      modalVehicleKitDetail: {
        title: 'Dispositivos do kit',
        noList: 'Este kit não possui dispositivos cadastrados.',
        charging: 'Carregando...',
        buttons: {
          close: 'Fechar'
        },
      },
      tooltip: {
        adapted: "Veículo adaptado"
      }
    },

    device: {
      title: {
        list: 'Dispositivos',
        new: 'Novo Dispositivo',
        edit: 'Editar Dispositivo',
      },
      buttons: {
        new: 'Adicionar novo Dispositivo',
        save: 'Salvar',
        cancel: 'Cancelar',
      }, 
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'Este dispositivo possui um vínculo e não pode ser excluído.',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        active: {
          label: 'Ativo',
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 200 caracteres.',
          }
        },
        model: {
          label: 'Modelo',
          errors: {
            required: 'O modelo não pode ficar vazio.',
            maxlength: 'O modelo não pode ter mais que 30 caracteres.',
          }
        },
        type: {
          label: 'Tipo',
          options: [
            {id: 1, value:'Tablet'},
            {id: 2, value:'Bluetooth'},
            {id: 3, value:'CPU veicular'},
            {id: 4, value:'Câmera IP'}
          ],
          errors: {
            required: 'O tipo não pode ficar vazio.',
          }
        },
        deviceKit: {
          label: 'Kit',
          errors: {
            required: 'O kit não pode ficar vazio.',
          }
        },
        imeiOrMacAddress: {
          label: 'Imei ou endereço Mac',
          errors: {
            maxlength: 'O Imei ou endereço Mac não pode ter mais que 25 caracteres.',
          }
        },
        ip: {
          label: 'IP Conexão',
          errors: {
            required: 'O IP Conexão não pode ficar vazio.',
            maxlength: 'O IP Conexão não pode ter mais que 15 caracteres.',
          }
        },
        password: {
          label: 'Senha',
          errors: {
            required: 'A senha não pode ficar vazia.',
            maxlength: 'A senha não pode ter mais que 16 caracteres.',
          }
        },
      },
      modal: {
        title: 'Excluir Dispositivo',
        messages: 'Tem certeza que deseja excluir este dispositivo?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    instructor: {
      title: {
        list: 'Instrutores',
        new: 'Novo Instrutor',
        edit: 'Editar Instrutor',
      },
      h3: {
        personalData: 'Dados pessoais',
        identityDoc: 'Documento de identidade',
        contactInfo: 'Informações para contato',
        authorization: 'Autorizações',
        situation: 'Situação'
      },
      buttons: {
        new: 'Adicionar novo Instrutor',
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        saved: 'Salvou dados',
        notDeleted: 'O instrutor não pode ser excluído pois possui aulas vinculadas!',
        errorCep: 'Ocorreu um erro ao carregar os dados do endereço. Por favor tente novamente mais tarde.',
        invalidCep: 'Cep inválido',
      },
      fields: {
        filter: 'Filtrar',
        colName: {
          label: 'Nome'
        },
        colBirth: {
          label: 'Nascimento'
        },
        colSituation: {
          label: 'Situação'
        },
        cpf: {
          label: 'CPF',
          errors: {
            required: 'O CPF não pode ficar vazio.',
            maxlength: 'O CPF não pode ter mais que 14 caracteres.',
            cpf: 'Por favor digite um CPF válido.',
          }
        },
        name: {
          label: 'Nome completo',
          errors: {
            required: 'O nome não pode ficar vazio.',
            maxlength: 'O nome não pode ter mais que 255 caracteres.',
          }
        },
        email: {
          label: 'E-mail',
          errors: {
            required: 'O e-mail não pode ficar vazio.',
            maxlength: 'O e-mail não pode ter mais que 100 caracteres.',
            email: 'Por favor digite um e-mail válido.',
          }
        },
        birthDate: {
          label: 'Data de nascimento',
          errors: {
            required: 'A data de nascimento não pode ficar vazia.',
          }
        },
        gender: {
          label: {
            sex: 'Sexo',
            m: 'Masculino',
            f: 'Feminino'
          },
          errors: {
            required: 'O sexo deve ser selecionado.',
          }
        },
        rg: {
          label: 'RG',
          errors: {
            maxlength: 'O RG não pode ter mais que 20 caracteres.',
          }
        },
        rgExpeditionAgency: {
          label: 'Órgão de expedição',
          errors: {
            maxlength: 'O órgão de expedição não pode ter mais que 20 caracteres.',
          }
        },
        rgState: {
          label: 'UF',
          errors: {
          }
        },
        rgExpeditionDate: {
          label: 'Data de expedição',
          errors: {
          }
        },
        zipcode: {
          label: 'CEP',
          errors: {
            required: 'O cep não pode ficar vazio.',
            maxlength: 'O CEP não pode ter mais que 9 caracteres.',
          }
        },
        street: {
          label: 'Logradouro',
          errors: {
            required: 'O logradouro não pode ficar vazio.',
            maxlength: 'O logradouro não pode ter mais que 200 caracteres.',
          }
        },
        number: {
          label: 'Número',
          errors: {
            required: 'O número não pode ficar vazio.',
            maxlength: 'O número não pode ter mais que 20 caracteres.',
          }
        },
        complement: {
          label: 'Complemento',
          errors: {
            maxlength: 'O complemento não pode ter mais que 50 caracteres.',
          }
        },
        cityArea: {
          label: 'Bairro',
          errors: {
            required: 'O bairro não pode ficar vazio.',
            maxlength: 'O bairro não pode ter mais que 100 caracteres.',
          }
        },
        city: {
          label: 'Município',
          errors: {
            required: 'O Município deve ser selecionado.',
          }
        },
        phoneNumber: {
          label: 'Telefone fixo',
          errors: {
            maxlength: 'O telefone não pode ter mais que 14 caracteres.',
          }
        },
        cellPhoneNumber: {
          label: 'Telefone celular',
          errors: {
            maxlength: 'O telefone não pode ter mais que 15 caracteres.',
          }
        },
        authTheoricalLesson: {
          label: 'Aulas teóricas',
          errors: {
            required: 'Obrigatória a seleção de ao menos um tipo de autorização.',
          }
        },
        authPraticalLesson: {
          label: 'Aulas práticas'
        },
        authSimulatorLesson: {
          label: 'Aulas em simulador'
        },
        active: {
          label: 'Ativo'
        },
      },
      modal: {
        title: 'Excluir Instrutor',
        messages: 'Tem certeza que deseja excluir esse instrutor?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

  },

  configuration: {

    infraction: {
      title: {
        new: 'Nova Infração de trânsito',
        edit: 'Editar Infração de trânsito',
        list: 'Infrações de trânsito',
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar nova Infração de trânsito',
        save: 'Salvar',
      },
      messages: {
        added: 'Infração adicionada com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'A atividade não pode ser excluído pois possui resultados vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        code: {
          label: 'Código',
          errors: {
            required: 'O código não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 5 caracteres.',
            range: 'O código deve ficar entre 1 e 99999.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        category: {
          label: 'Categoria',
          errors: {
            required: 'Uma categoria deve ser selecionada.',
          }
        },
        points: {
          label: 'Pontos',
          errors: {
            required: 'O campo pontos não pode ficar vazio.',
            maxlength: 'O campo pontos não pode ter mais que 2 caracteres.',
            range: 'O campo pontos deve ficar entre 1 e 99.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        article: {
          label: 'Artigo',
          errors: {
            required: 'O artigo não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 10 caracteres.',
          }
        },
        paragraph: {
          label: 'Alínea',
          errors: {
            required: 'A alínea não pode ficar vazia.',
            maxlength: 'A alínea não pode ter mais que 10 caracteres.',
          }
        },
        law: {
          label: 'Lei',
          errors: {
            required: 'A lei não pode ficar vazia.',
            maxlength: 'A lei não pode ter mais que 255 caracteres.',
          }
        },
      },
      modal: {
        title: 'Excluir Infração',
        messages: 'Tem certeza que deseja excluir essa infração?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    userType: {
      title: {
        new: 'Novo Perfil de usuário',
        edit: 'Editar Perfil de usuário',
        list: 'Perfis de usuário',
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar novo Perfil de usuário',
        save: 'Salvar',
      },
      messages: {
        added: 'Perfil adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O perfil de usuário não pode ser excluído pois possui usuários vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 30 caracteres.',
          }
        },
        permissions: {
          label: 'Permissões:'
        },
        funcionality: {
          label: 'Funcionalidade',
        },
        authCreate: {
          label: 'Incluir',
        },
        authUpdate: {
          label: 'Editar',
        },
        authDelete: {
          label: 'Excluir',
        },
        authRead: {
          label: 'Consultar',
        },
      },
      modal: {
        title: 'Excluir Perfil',
        messages: 'Tem certeza que deseja excluir esse perfil?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    simulationEvent: {
      title: {
        new: 'Novo Evento',
        edit: 'Editar Evento',
        list: 'Eventos',
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar novo Evento',
        save: 'Salvar',
      },
      messages: {
        added: 'Evento adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O evento não pode ser excluído pois possui resultados de aulas vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        id: {
          label: 'Código',
          errors: {
            required: 'O código não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 8 caracteres.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        category: {
          label: 'Categoria',
          errors: {
            required: 'A categoria deve ser selecionada.',
          }
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 100 caracteres.',
          }
        },
      },
      modal: {
        title: 'Excluir Evento',
        messages: 'Tem certeza que deseja excluir esse evento?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    simulationExercise: {
      title: {
        tab1: 'Aulas em Simulador',
        tab2: 'Aulas Práticas',
        new: 'Novo Exercício',
        edit: 'Editar Exercício',
        list: 'Exercícios das Aulas em Simulador',
        clone: 'Clonar Conjuntos de Exercícios'
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar novo Exercício',
        save: 'Salvar',
        cloneExercises: 'Clonar Conjunto de Exercícios',
        clone: 'Clonar',
      },
      messages: {
        added: 'Exercício adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O exercício não pode ser excluído pois possui aulas vinculadas!',
        notSameCodeVersion: 'Não é permitido salvar um exercício com mesmo código para a mesma versão de software.',
        saved: 'Salvou dados',
        cloneMsg: 'Todos os exercícios da versão de origem serão copiados para a versão de destino',
      },
      fields: {
        filter: 'Filtrar',
        code: {
          label: 'Código',
          errors: {
            required: 'O código não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 6 caracteres.',
            range: 'O código deve ficar entre 1 e 999999.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 100 caracteres.',
          }
        },
        softwareVersion: {
          label: 'Versão de software',
          errors: {
            required: 'Uma versão de software deve ser selecionada.',
          }
        },
        sourceSoftwareVersionId: {
          label: 'Versão de origem',
          errors: {
            required: 'Uma versão de origem deve ser selecionada.',
          }
        },
        destSoftwareVersionId: {
          label: 'Versão de destino',
          errors: {
            required: 'Uma versão de destino deve ser selecionada.',
            notEqualTo: 'A versão de origem selecionada deve ser diferente da versão de destino.',
          }
        },
      },
      modal: {
        title: 'Excluir Exercício',
        messages: 'Tem certeza que deseja excluir esse exercício?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    simulationModule: {
      title: {
        tab1: 'Aulas em Simulador',
        tab2: 'Aulas Práticas',
        new: 'Novo Módulo',
        edit: 'Editar Módulo',
        list: 'Módulos das Aulas em Simulador',
        clone: 'Clonar Conjunto de Módulos',
      },
      buttons: {
        new: 'Adicionar Novo Módulo',
        save: 'Salvar',
        cancel: 'Cancelar',
        cloneLessons: 'Clonar Conjunto de Módulos',
        clone: 'Clonar',
      },
      messages: {
        added: 'Módulo adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O módulo não pode ser excluído pois já existem agendamentos realizados!',
        saved: 'Salvou dados',
        // notSameCodeVersion: 'Não é permitido salvar um exercício com mesmo código para a mesma versão de software.',
        cloneMsg: 'Todas os módulos da versão de origem serão copiadas para a versão de destino',
      },
      fields: {
        filter: 'Filtrar',
        active: {
          label: 'Ativo',
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'O nome não pode ter mais que 100 caracteres.',
          }
        },
        nightly: {
          label: 'Módulo noturno'
        },
        softwareVersion: {
          label: 'Versão de software',
          errors: {
            required: 'Uma versão de software deve ser selecionada.',
          }
        },
        identifierOnDepartment: {
          label: 'Identificação no departamento',
          errors: {
            required: 'A identificação no departamento não pode ficar vazio.',
            maxlength: 'A identificação no departamento não deve ser maior que 5 dígitos.',
            max: 'A identificação no departamento não deve ser maior que 32767.',
          }
        },
        exercises: {
          label: 'Exercícios',
          errors: {
            minLength: 'Ao menos um exercicio deve ser adicionado.',
          }
        },
        sourceSoftwareVersionId: {
          label: 'Versão de origem',
          errors: {
            required: 'Uma versão de origem deve ser selecionada.',
          }
        },
        destSoftwareVersionId: {
          label: 'Versão de destino',
          errors: {
            required: 'Uma versão de destino deve ser selecionada.',
            notEqualTo: 'A versão de origem selecionada deve ser diferente da versão de destino.',
          }
        },
      },
      modal: {
        title: 'Excluir Módulo',
        messages: 'Tem certeza que deseja excluir esse módulo?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    praticalModule: {
      title: {
        tab1: 'Aulas em Simulador',
        tab2: 'Aulas Práticas',
        new: 'Novo Módulo',
        edit: 'Editar Módulo',
        list: 'Módulos das Aulas Práticas',
      },
      buttons: {
        new: 'Adicionar Novo Módulo',
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      messages: {
        added: 'Módulo adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O módulo não pode ser excluído pois já existem agendamentos realizados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        active: {
          label: 'Ativo',
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'O nome não pode ter mais que 100 caracteres.',
          }
        },
        programaticContent: {
          label: 'Conteúdo programático',
        },
        exercises: {
          label: 'Exercícios',
          errors: {
            minLength: 'Ao menos um exercício deve ser adicionado.',
          }
        },
      },
      modal: {
        title: 'Excluir Módulo',
        messages: 'Tem certeza que deseja excluir esse módulo?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    praticalExercise: {
      title: {
        tab1: 'Aulas em Simulador',
        tab2: 'Aulas Práticas',
        new: 'Novo Exercício',
        edit: 'Editar Exercício',
        list: 'Exercícios das Aulas Práticas'
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar novo Exercício',
        save: 'Salvar',
      },
      messages: {
        added: 'Exercício adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O exercício não pode ser excluído pois possui aulas vinculadas!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        code: {
          label: 'Código',
          errors: {
            required: 'O código não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 6 caracteres.',
            range: 'O código deve ficar entre 1 e 999999.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 100 caracteres.',
          }
        },
      },
      modal: {
        title: 'Excluir Exercício',
        messages: 'Tem certeza que deseja excluir esse exercício?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    vehicleType: {
      title: {
        new: 'Novo Tipo de veículo',
        edit: 'Editar Tipo de veículo',
        list: 'Tipos de veículos',
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar novo Tipo de veículo',
        save: 'Salvar',
      },
      messages: {
        added: 'Tipo de veículo adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O tipo do veículo não pode ser excluído pois possui modelos de veículos vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        id: {
          label: 'Código',
          errors: {
            required: 'O código não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 4 caracteres.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 20 caracteres.',
          }
        },
      },
      modal: {
        title: 'Excluir Tipo de veículo',
        messages: 'Tem certeza que deseja excluir esse tipo de veículo?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    vehicleModel: {
      title: {
        new: 'Novo Modelo de veículo',
        edit: 'Editar Modelo de veículo',
        list: 'Modelos de veículos',
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar novo Modelo de veículo',
        save: 'Salvar',
      },
      messages: {
        added: 'Modelo de veículo adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'O modelo de veículo não pode ser excluído pois possui agendamentos vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        id: {
          label: 'Código',
          errors: {
            required: 'O código não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 6 caracteres.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 20 caracteres.',
          }
        },
        vehicleType: {
          label: 'Tipo',
          errors: {
            required: 'Um tipo de veículo deve ser selecionado.',
          }
        },
      },
      modal: {
        title: 'Excluir Modelo de veículo',
        messages: 'Tem certeza que deseja excluir esse modelo de veículo?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    simulationActivity: {
      title: {
        new: 'Nova Atividade',
        edit: 'Editar Atividade',
        list: 'Atividades',
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar nova Atividade',
        save: 'Salvar',
      },
      messages: {
        added: 'Atividade adicionada com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluida com sucesso.',
        notDeleted: 'A atividade não pode ser excluída pois possui resultados de aulas vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        id: {
          label: 'Código',
          errors: {
            required: 'O código não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 9 caracteres.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 512 caracteres.',
          }
        },
        vehicleType: {
          label: 'Tipo',
          errors: {
            required: 'Um tipo de veículo deve ser selecionado.',
          }
        },
      },
      modal: {
        title: 'Excluir Atividade',
        messages: 'Tem certeza que deseja excluir essa atividade?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    holiday: {
      title: {
        new: 'Novo Feriado',
        edit: 'Editar Feriado',
        list: 'Feriados',
      },
      h3: {
        fixed: 'Feriados fixos:',
        variable: 'Feriados variáveis:'
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar novo Feriado',
        save: 'Salvar',
      },
      messages: {
        added: 'Feriado adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        holidayDate: {
          label: 'Data',
          errors: {
            required: 'A data do feriado não pode ficar vazia.',
          }
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 50 caracteres.',
          }
        },
        type: {
          label: 'Tipo',
          errors: {
            required: 'Um tipo de feriado deve ser selecionado.',
          }
        },
      },
      modal: {
        title: 'Excluir Feriado',
        messages: 'Tem certeza que deseja excluir esse feriado?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    user: {
      title: {
        list: 'Usuários',
        new: 'Novo Usuário',
        edit: 'Editar Usuário',
      },
      tooltip: {
        edit: 'Editar',
        delete: 'Excluir',
        redefinePassword: 'Redefinir senha',
      },
      buttons: {
        new: 'Adicionar novo Usuário',
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        saved: 'Salvou dados',
        notDeleted: 'O usuário não pode ser excluído pois possui registros vinculados!',
        reseted: 'Um e-mail foi enviado com um link para cadastrar uma nova senha.',
      },
      fields: {
        filter: 'Filtrar',
        cpf: {
          label: 'CPF',
          errors: {
            required: 'O CPF não pode ficar vazio.',
            maxlength: 'O CPF não pode ter mais que 14 caracteres.',
            cpf: 'Por favor digite um CPF válido.',
          }
        },
        firstName: {
          label: 'Nome',
          errors: {
            required: 'O nome não pode ficar vazio.',
            maxlength: 'O nome não pode ter mais que 30 caracteres.',
          }
        },
        lastName: {
          label: 'Sobrenome',
          errors: {
            required: 'O sobrenome não pode ficar vazio.',
            maxlength: 'O sobrenome não pode ter mais que 80 caracteres.',
          }
        },
        email: {
          label: 'E-mail',
          errors: {
            required: 'O e-mail não pode ficar vazio.',
            maxlength: 'O e-mail não pode ter mais que 100 caracteres.',
            email: 'Por favor digite um e-mail válido.',
          }
        },
        userTypeId: {
          label: 'Perfil',
          errors: {
            required: 'O perfil não pode ficar vazio.',
          }
        },
        active: {
          label: 'Ativo',
        },
      },
      modal: {
        title: {
          reset: 'Redefinir senha',
          delete: 'Excluir Usuário'
        },
        messages: {
          reset: 'Deseja realmente redefinir a senha deste usuário?',
          delete: 'Tem certeza que deseja excluir esse usuário?',
        },
        buttons: {
          cancel: 'Cancelar',
          confirm: 'Confirmar',
          ok: 'OK',
          close: 'Fechar'
        },
      }
    },

    softwareVersion: {
      title: {
        new: 'Nova Versão do Software',
        edit: 'Editar Versão do Software',
        list: 'Versões do software de simulação',
      },
      buttons: {
        cancel: 'Cancelar',
        new: 'Adicionar nova Versão de software',
        save: 'Salvar',
      },
      messages: {
        added: 'Versão adicionada com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Excluído com sucesso.',
        notDeleted: 'A versão de software não pode ser excluída pois possui exercícios vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        version: {
          label: 'Versão',
          errors: {
            required: 'A versão não pode ficar vazia.',
            maxlength: 'A versão não pode ter mais que 10 caracteres.',
          }
        },
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 100 caracteres.',
          }
        },
        releaseDate: {
          label: 'Data de Liberação',
          errors: {
            required: 'A data de liberação não pode ficar vazia.',
          }
        }
      },
      modal: {
        title: 'Excluir Versão',
        messages: 'Tem certeza que deseja excluir essa versão?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    department: {
      title: 'Departamento de trânsito',
      buttons: {
        save: 'Salvar'
      },
      messages: {
        saved: 'Salvou dados',
        error: 'Ocorreu um erro no sistema'
      },
      fields: {
        name: {
          label: 'Nome',
          errors: {
            required: 'O nome não pode ficar vazio.',
            maxlength: 'O nome não pode ter mais que 20 caracteres.',
          }
        },
        state: {
          label: 'UF',
          errors: {
            required: 'O estado deve ser selecionado.',
          }
        },
        communicationType: {
          label: 'Forma de Integração',
          errors: {
            required: 'A forma de integração deve ser selecionada.',
          }
        },
        webserviceAddress: {
          label: 'Endereço de Webservice - Aulas em Simulador',
          errors: {
            required: 'O endereço de webservice - aulas em simulador não pode ficar vazio.',
            maxlength: 'O endereço de webservice - aulas em simulador não pode ter mais que 200 caracteres.',
            url: 'A URL não é válida.',
          }
        },
        webserviceAddressPraticalLesson: {
          label: 'Endereço de Webservice - Aulas Práticas',
          errors: {
            required: 'O endereço de webservice - aulas práticas não pode ficar vazio.',
            maxlength: 'O endereço de webservice - aulas práticas não pode ter mais que 200 caracteres.',
            url: 'A URL não é válida.',
          }
        }
      }
    },

    smtpServer: {
      title: 'Servidor SMTP',
      buttons: {
        save: 'Salvar',
        sendEmail: 'Enviar e-mail de teste'
      },
      messages: {
        saved: 'Salvou dados',
        error: 'Ocorreu um erro no sistema: '
      },
      fields: {
        description: {
          label: 'Descrição',
          errors: {
            required: 'A descrição não pode ficar vazia.',
            maxlength: 'A descrição não pode ter mais que 100 caracteres.',
          }
        },
        server: {
          label: 'Servidor',
          errors: {
            required: 'O servidor não pode ficar vazio.',
            maxlength: 'O servidor não pode ter mais que 100 caracteres.',
          }
        },
        port: {
          label: 'Porta',
          errors: {
            required: 'A porta não pode ficar vazia.',
            maxlength: 'A porta não pode ter mais que 5 caracteres.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        username: {
          label: 'Usuário',
          errors: {
            required: 'O usuário não pode ficar vazio.',
            maxlength: 'O usuário não pode ter mais que 50 caracteres.',
          }
        },
        password: {
          label: 'Senha',
          errors: {
            required: 'A senha não pode ficar vazia.',
            maxlength: 'A senha não pode ter mais que 50 caracteres.',
          }
        },
        enableSSL: {
          label: 'Habilitar SSL'
        },
        timeout: {
          label: 'Timeout',
          errors: {
            required: 'O timeout não pode ficar vazio.',
            maxlength: 'O timeout não pode ter mais que 3 caracteres.',
            range: 'O timeout deve ter entre 1 a 120 segundos',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
      },
      modal: {
        title: 'Enviar e-mail de teste',
        buttons: {
          send: 'Enviar',
          close: 'Fechar'
        },
        messages: {
          sent: 'Enviou e-mail de teste',
          error: 'Ocorreu um erro no sistema: '
        },
        fields: {
          email: 'E-mail de destino',
          errors: {
            required: 'O email não pode ficar vazio.',
            email: 'Por favor digite um e-mail válido.'
          }
        }
      },
    },

    system: {
      title: 'Sistema',
      edit: 'Editar Parâmetros',
      detail: 'Parâmetros - Detalhe',
      h3: {
        generalParams: 'Parâmetros gerais',
        diaryParams: 'Parâmetros da agenda',
        diaryParamsSim: 'Parâmetros para agendamento de aulas',
        ftpParams: 'Parâmetros para acesso ao serviço FTP',
        finParams: 'Parâmetros financeiros'
      },
      h4: {
        detranClassLoose: 'Aula Detran / Aula Avulsa',
        freeClass: 'Aula Livre',
      },
      tooltip: {
        detail: 'Detalhes',
        update: 'Atualizar'
      },
      buttons: {
        save: 'Salvar',
        cancel: 'Cancelar',
        back: 'voltar'
      },
      messages: {
        saved: 'Salvou dados',
        error: 'Ocorreu um erro no sistema: '
      },
      tabs: {
        simulationLesson: 'Aulas em Simulador',
        praticalLesson: 'Aulas Práticas',
      },
      fields: {
        externalAccessUrl: {
          label: 'URL para acesso externo',
          errors: {
            required: 'A URL não pode ficar vazia.',
            maxlength: 'A URL não pode ter mais que 200 caracteres.',
            url: 'A URL não é válida.'
          }
        },
        scheduleOpenTime: {
          label: 'Hora de abertura',
          errors: {
            required: 'A hora de abertura não pode ficar vazia.'
          }
        },
        scheduleCloseTime: {
          label: 'Hora de fechamento',
          errors: {
            required: 'A hora de fechamento não pode ficar vazia.'
          }
        },
        scheduleTimeDivision: {
          label: 'Intervalo',
          errors: {
            required: 'O intervalo deve ser selecionado.'
          }
        },
        lessonScheduler: {
          label: 'Agendamento de aulas realizado pelo Departamento de trânsito'
        },
        officialLessonTotalTime: {
          label: 'Tempo total de aula',
          errors: {
            required: 'O tempo total de aula não pode ficar vazio.',
            maxlength: 'O tempo total de aula não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        officialLessonEffectiveTime: {
          label: 'Tempo efetivo de aula',
          errors: {
            required: 'O tempo efetivo de aula não pode ficar vazio.',
            maxlength: 'O tempo efetivo de aula não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        freeLessonTotalTime: {
          label: 'Tempo total em aulas livres',
          errors: {
            required: 'O tempo total em aulas livres não pode ficar vazio.',
            maxlength: 'O tempo total em aulas livres não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        freeLessonEffectiveTime: {
          label: 'Tempo efetivo em aulas livres',
          errors: {
            required: 'O tempo efetivo em aulas livres não pode ficar vazio.',
            maxlength: 'O tempo efetivo em aulas livres não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        maxNumFreeLessonsPerDay: {
          label: 'Máximo de aulas livres por dia',
          errors: {
            required: 'O número máximo de aulas livres por dia não pode ficar vazio.',
            maxlength: 'O número máximo de aulas livres por dia não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        maxNumLessonsPerDayPerStudent: {
          label: 'Máximo de aulas por dia para o mesmo aluno',
          errors: {
            required: 'O número máximo de aulas para o mesmo aluno não pode ficar vazio.',
            maxlength: 'O número máximo de aulas para o mesmo aluno não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        maxNumLessonsInSequencePerStudent: {
          label: 'Máximo de aulas em seq. para o mesmo aluno',
          errors: {
            required: 'O número máximo de aulas em sequência para o mesmo aluno não pode ficar vazio.',
            maxlength: 'O número máximo de aulas em sequência para o mesmo aluno não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        minIntervalBetweenLessonsSequence: {
          label: 'Intervalo mínimo entre sequência de aulas',
          errors: {
            required: 'O intervalo mínimo entre sequências de aulas não pode ficar vazio.',
            maxlength: 'O intervalo mínimo entre sequências de aulas não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        maxSimultaneousLessonsPerInstructor: {
          label: 'Máximo de aulas simultâneas por instrutor',
          errors: {
            required: 'O número máximo de aulas simultâneas por instrutor não pode ficar vazio.',
            maxlength: 'O número máximo de aulas simultâneas por instrutor não pode ter mais que 4 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        maxSizeAttachment: {
          label: 'Tamanho máximo permitido por anexos (comprovante) em MB',
          errors: {
            required: 'O tamanho máximo permitido para anexos não pode ficar vazio.',
            maxlength: 'O tamanho máximo permitido para anexos não pode ter mais que 6 caracteres',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        ftpAccessUrl: {
          label: 'URL para acesso ao FTP',
          errors: {
            required: 'O tamanho máximo permitido para a URL não pode ter mais que 200 caracteres'
          }
        },
        ftpPort: {
          label: 'Porta FTP',
          errors: {
            required: 'O tamanho máximo permitido para a Porta FTP não pode ter mais que 4 caracteres'
          }
        },
        ftpUser: {
          label: 'Usuário FTP',
          errors: {
            required: 'O tamanho máximo permitido para a Usuário FTP não pode ter mais que 50 caracteres'
          }
        },
        ftpPassword: {
          label: 'Senha FTP',
          errors: {
            required: 'O tamanho máximo permitido para a Senha FTP não pode ter mais que 30 caracteres'
          }
        },
        lessonsCategory : {
          label: 'Tipo de aula',
          options: [
            {id: 0, value:'Teórica'},
            {id: 1, value:'Prática'},
            {id: 2, value:'Simulador'}
          ],
        }
      }
    },
    downloads: {
      title: 'Downloads',
      h3: {
        fileList : 'Arquivos disponíveis'
      },
      fields: {
        fileDescription: {
          label: 'Nome do arquivo'
        },
        fileExtension: {
          label: 'Extensão do arquivo'
        },
        operationSystem: {
          label: 'Sistema operacional'
        },
        download: {
          label: 'Download'
        },
        filter: 'Pesquisar'
      },
      tooltip : {
        download: 'Baixar arquivo'
      }
    }  
  },

  financial: {

    contract: {
      title: {
        list: 'Contratos',
        new: 'Novo Contrato',
        edit: 'Editar Contrato',
      },
      h3: {
        cfcLists: 'CFCs',
        contracts: 'Contratos'
      },
      buttons: {
        new: 'Adicionar novo Contrato',
        save: 'Salvar',
        cancel: 'Cancelar',
      },
      messages: {
        added: 'Contrato adicionado com sucesso',
        error: 'Ocorreu um erro no sistema',
        deleted: 'Cancelado com sucesso.',
        notDeleted: 'O contrato não pode ser excluído pois possui agendamentos de aulas vinculados!',
        saved: 'Salvou dados',
      },
      fields: {
        filter: 'Filtrar',
        filterBy: 'Filtrar por',
        companyType: 'Tipo da empresa',
        drivingSchool: {
          label: 'CFC',
          errors: {
            required: 'Um CFC deve ser selecionado.',
          }
        },
        sharedUnit: {
          label: 'Centro Compartilhado',
          errors: {
            required: 'Um Centro Compartilhado deve ser selecionado.',
          }
        },
        startDate: {
          label: 'Data Início',
          errors: {
            required: 'A data de início não pode ficar vazia.',
          }
        },
        endDate: {
          label: 'Data Término',
          errors: {
            required: 'A data de término não pode ficar vazia.',
            bigger: 'A data de término deve ser maior que a data de início.'
          }
        },
        lessonPrice: {
          label: 'Valor por Aula',
          errors: {
            required: 'O valor hora/aula não pode ficar vazio.',
            maxlength: 'O código não pode ter mais que 17 caracteres.',
          }
        },
        paymentPlan: {
          label: 'Plano de Pagamento',
          options: [
            {id: 0, value:'Pré-pago'},
            {id: 1, value:'Pós-pago'}
          ],
          errors: {
            required: 'O plano de pagamento deve ser selecionado.',
          }
        },
        contractCategory: {
          label: 'Categoria das aulas',
          options: [
            {id: 0, value:'Teórica'},
            {id: 1, value:'Prática'},
            {id: 2, value:'Simulador'}
          ],
          errors: {
            required: 'A categoria das aulas deve ser selecionada.',
          }
        },
        category: {
          label: 'Categoria'
        },
        minimumConsumption: {
          label: 'Consumo Mínimo',
          errors: {
            required: 'O valor do consumo mínimo não pode ficar vazio.',
            maxlength: 'O valor do consumo mínimo não pode ter mais que 17 dígitos.',
          }
        },
        advanceDaysToAlert: {
          label: {
            pre: 'Emitir alerta diário por e-mail a partir de',
            label: 'dias',
            pos: 'de antecedência do término do contrato para os seguintes usuários:'
          },
          errors: {
            required: 'O numero de dias não pode ficar vazio.',
            maxlength: 'Esse campo não pode ter mais que 6 caracteres.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        usersToAlert: {
          label: 'Usuários:',
          errors: {
            required: 'É necessário selecionar ao menos um usuário.',
          }
        },
        active: {
          label: 'Situação'
        }
      },
      modal: {
        title: 'Cancelar contrato',
        messages: 'Tem certeza que deseja cancelar esse contrato?',
        buttons: {
          ok: 'OK',
          cancel: 'Cancelar',
          close: 'Fechar'
        }
      }
    },

    bonusEntry: {
      title: 'Entrada de bônus',
      buttons: {
        save: 'Adicionar',
        cancel: 'Cancelar'
      },
      h3: 'Últimos Lançamentos',
      messages: {
        saved: 'Salvou dados',
        error: 'Ocorreu um erro no sistema: '
      },
      fields: {
        drivingSchoolId: {
          label: 'CFC',
          errors: {
            required: 'Uma CFC deve ser selecionada.',
          }
        },
        lessons: {
          label: 'Aula(s)'
        },
        bonusValue: {
          label: 'Quantidade de bônus',
          errors: {
            required: 'A quantidade de bônus não pode ficar vazia.',
            maxlength: 'A quantidade de bônus não pode ter mais que 6 caracteres.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        contractCategory: {
          label: 'Categoria das aulas',
          options: [
            {id: 0, value:'Teórica'},
            {id: 1, value:'Prática'},
            {id: 2, value:'Simulador'}
          ],
          errors: {
            required: 'A categoria das aulas deve ser selecionada.',
          }
        },
        category: {
          label: 'Categoria'
        },
        justification: {
          label: 'Justificativa',
          errors: {
            required: 'A justificativa não pode ficar vazia.',
            maxlength: 'A justificativa não pode ter mais que 500 caracteres.',
          }
        },
        date: {
          label: 'Data',
          errors: {
          }
        },
        type: {
          label: 'Tipo',
          errors: {
          }
        },
        quantity: {
          label: 'Quantidade',
          errors: {
          }
        },
        user: {
          label: 'Usuário',
          errors: {
          }
        },
      },
      modalConfirmEntry: {
        title: 'Confirmar entrada de bônus',
        messages: 'Confirma a entrada de {bonus} aulas em bônus para {drivingSchool}?',
        buttons: {
          ok: 'Confirmar',
          cancel: 'Cancelar'
        }
      },
      modalCancelBonus: {
        title: {
          cancel : 'Cancelar Bônus',
          canceled : 'Bônus Cancelado'
        },
        buttons: {
          ok: 'Cancelar Bônus',
          cancel: 'Desistir',
          close: 'Fechar'
        },
      },
      modalBonusDetail: {
        title: 'Detalhe do Bônus',
        fields: {
          enrolmentId: 'Identificação',
          studentName: 'Nome do Estudante',
        },
        buttons: {
          close: 'Fechar'
        },
      },
      modalConfirmCancel: {
        title: 'Confirmar cancelamento de Bônus',
        messages: 'Confirma o cancelamento da entrada de {bonus} aulas em bônus para {drivingSchool}?',
        buttons: {
          ok: 'Confirmar cancelamento',
          cancel: 'Cancelar'
        },
      },
    },

    manageBonus: {
      title: 'Gerenciar bônus',
      buttons: {
        find: 'Buscar',
      },
      messages: {
        canceled: 'O bônus foi cancelado',
        error: 'Ocorreu um erro no sistema: '
      },
      fields: {
        idCFC: {
          label: 'CFC',
          errors: {
            required: 'Uma CFC deve ser selecionada.',
          }
        },
        studentCpf: {
          label: 'CPF'
        },
        studentName: {
          label: 'Nome'
        },
        enrollmentId: {
          label: 'Matrícula'
        },
        debitedBonus: {
          label: 'Bônus debitado'
        },
        drivingSchoolId: {
          label: 'CFC',
          errors: {
            required: 'Uma CFC deve ser selecionada.',
          }
        },
        lessons: {
          label: 'Aula(s)'
        },
        bonusValue: {
          label: 'Quantidade de bônus',
          errors: {
            required: 'A quantidade de bônus não pode ficar vazia.',
            maxlength: 'A quantidade de bônus não pode ter mais que 6 caracteres.',
            number: 'Somente números são permitidos nesse campo.',
          }
        },
        contractCategory: {
          label: 'Categoria das aulas',
          options: [
            {id: 0, value:'Teórica'},
            {id: 1, value:'Prática'},
            {id: 2, value:'Simulador'}
          ],
          errors: {
            required: 'A categoria das aulas deve ser selecionada.',
          }
        },
        category: {
          label: 'Categoria'
        },
        justification: {
          label: 'Justificativa',
          errors: {
            required: 'A justificativa não pode ficar vazia.',
            maxlength: 'A justificativa não pode ter mais que 500 caracteres.',
          }
        },
        initialTimestamp: {
          label: 'Data inicial',
          errors: {
            required: 'A data inicial não pode ficar vazia.',
          }
        },
        finalTimestamp: {
          label: 'Data final',
          errors: {
            required: 'A data final não pode ficar vazia.',
            bigger: 'A data final deve ser maior que a data inicial.'
          }
        },
        date: {
          label: 'Data',
          errors: {
          }
        },
        type: {
          label: 'Tipo',
          errors: {
          }
        },
        quantity: {
          label: 'Quantidade',
          errors: {
          }
        },
        lessonsCategory: {
          label: 'Categoria',
          options: [
            {id: 0, value:'Teórica'},
            {id: 1, value:'Prática'},
            {id: 2, value:'Simulador'}
          ]
        },
        user: {
          label: 'Usuário',
          errors: {
          }
        },
      },
      modalBonusDetail: {
        title: 'Detalhe do Bônus',
        buttons: {
          close: 'Fechar'
        },
      },
    },

    creditEntry: {
      title: 'Entrada de crédito',
      buttons: {
        save: 'Adicionar',
        cancel: 'Cancelar'
      },
      h3: 'Últimos Lançamentos',
      messages: {
        saved: 'Salvou dados',
        error: 'Ocorreu um erro no sistema: '
      },
      fields: {
        drivingSchoolId: {
          label: 'CFC',
          errors: {
            required: 'Uma CFC deve ser selecionada.',
          }
        },
        creditValue: {
          label: 'Valor Crédito',
          errors: {
            required: 'O valor crédito não pode ficar vazio.',
            maxlength: 'O valor crédito não pode ter mais que 17 caracteres.',
          }
        },
        justification: {
          label: 'Justificativa',
          errors: {
            required: 'A justificativa não pode ficar vazia.',
            maxlength: 'A justificativa não pode ter mais que 500 caracteres.',
          }
        },
        evidences: {
          label: 'Comprovantes',
          errors: {
            required: 'Pelo menos um comprovante deve ser adicionado.',
            maxSize: 'O arquivo não pode ter mais que {size} MB de tamanho.',
            fileType: 'São permitidos somente arquivos de imagens e documentos (extenção jpg, jpeg, bmp, png, pdf, txt, xls, xlt, doc e docx).'
          }
        },
        dragAndDrop: {
          label: 'Arraste e solte aqui'
        },
        date: {
          label: 'Data',
          errors: {
          }
        },
        type: {
          label: 'Tipo',
          errors: {
          }
        },
        value: {
          label: 'Valor',
          errors: {
          }
        },
        user: {
          label: 'Usuário',
          errors: {
          }
        },
      },
      modalConfirmEntry: {
        title: 'Confirmar entrada de crédito',
        messages: 'Confirma a entrada de crédito no valor de {value} para {drivingSchool}?',
        buttons: {
          ok: 'Creditar',
          cancel: 'Cancelar'
        }
      },
      modalCancelCredit: {
        title: {
          cancel : 'Estornar crédito',
          enrollmented : 'Debitado',
          canceled : 'Crédito estornado'
        },
        buttons: {
          ok: 'Estornar',
          cancel: 'Desistir',
          close: 'Fechar'
        },
      },
      modalConfirmCancel: {
        title: 'Confirmar estorno de crédito',
        messages: 'Confirma o estorno do crédito no valor de {value} para {drivingSchool}?',
        buttons: {
          ok: 'Confirmar estorno',
          cancel: 'Cancelar'
        },
      },
    },

    manageCredit: {
      title: 'Gerenciar créditos',
      buttons: {
        find: 'Buscar',
      },
      messages: {
        canceled: 'O crédito foi cancelado',
        error: 'Ocorreu um erro no sistema: '
      },
      fields: {
        idCFC: {
          label: 'CFC',
          errors: {
            required: 'Uma CFC deve ser selecionada.',
          }
        },
        studentCpf: {
          label: 'CPF'
        },
        studentName: {
          label: 'Nome'
        },
        enrollmentId: {
          label: 'Matrícula'
        },
        debitedCredit: {
          label: 'Bônus debitado'
        },
        initialTimestamp: {
          label: 'Data inicial',
          errors: {
            required: 'A data inicial não pode ficar vazia.',
          }
        },
        finalTimestamp: {
          label: 'Data final',
          errors: {
            required: 'A data final não pode ficar vazia.',
            bigger: 'A data final deve ser maior que a data inicial.'
          }
        },
        date: {
          label: 'Data',
          errors: {
          }
        },
        type: {
          label: 'Tipo',
          errors: {
          }
        },
        value: {
          label: 'Valor',
          errors: {
          }
        },
        lessonsCategory: {
          label: 'Categoria',
          options: [
            {id: 0, value:'Teórica'},
            {id: 1, value:'Prática'},
            {id: 2, value:'Simulador'}
          ]
        },
        user: {
          label: 'Usuário',
          errors: {
          }
        },
      },
      modalCreditDetail: {
        title: 'Detalhe do Crédito',
        buttons: {
          close: 'Fechar'
        },
      },
    },
  },

  consult: {

    requisition: {
      title: {
        list: 'Histórico de requisições',
        detailRequest: 'Requisição',
        detailResponse: 'Resposta',
        // new: 'Novo Contrato',
        // edit: 'Editar Contrato',
      },
      buttons: {
        consult: 'Consultar',
        // new: 'Adicionar novo Contrato',
        // save: 'Salvar',
        cancel: 'Cancelar',
        close: 'Fechar'
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.'
      },
      fields: {
        // filter: 'Filtrar',
        companyId: {
          label: {
            consultBy: 'Consultar por',
            drivingSchool: 'CFC',
            sharedUnit: 'Centro Compartilhado'
          },
          errors: {
          }
        },
        simulatorsId: {
          label: 'Simulador',
          options: {
            0: 'Todos os simuladores'
          },
          errors: {
            // required: 'A data de início não pode ficar vazia.',
          }
        },
        initialDate: {
          label: 'Data inicial',
          errors: {
            // required: 'A data de término não pode ficar vazia.',
          }
        },
        finalDate: {
          label: 'Data final',
          errors: {
            // required: 'A data de término não pode ficar vazia.',
            bigger: 'A data de final deve ser maior que a data inicial.'
          }
        },
        status: {
          label: 'Status',
          options: {
            0: 'Todos'
          },
          errors: {
            // required: 'O valor hora/aula não pode ficar vazio.',
            // maxlength: 'O código não pode ter mais que 17 caracteres.',
          }
        },
        date: {
          label: 'Data',
          errors: {
          }
        },
        type: {
          label: 'Tipo',
          errors: {
          }
        },
        service: {
          label: 'Serviço',
          errors: {
          }
        },
        request: {
          label: 'Requisição'
        },
        response: {
          label: 'Resposta'
        }
      },
      modal: {
        buttons: {
          close: 'Fechar'
      },
      }
    },

    praticalLessonList: {

      title: {
        list: 'Agendamento de aulas Práticas',
        tab1: 'Aulas em Simulador',
        tab2: 'Aulas Práticas'
      },
      buttons: {
        search: 'Pesquisar'
      },
      fields: {
        id: {
          label: 'Id',
        },
        initialDate: {
          label: 'Data inicial',
          errors: {
            required: 'A data inicial não pode ficar vazia.'
          }
        },
        finalDate: {
          label: 'Data final',
          errors: {
            required: 'A data final não pode ficar vazia.',
            bigger: 'A data final deve ser maior que a data inicial.'
          }
        },
        drivingSchool: {
          label: 'CFC'
        },  
        dateScheduled: {
          label: 'Data agendada'
        },
        student: {
          label: 'Aluno'
        },
        cpf: {
          label: 'CPF'
        },
        sharedUnit: {
          label: 'Centro Compartilhado'
        },
        consultBy: {
          label: 'Consultar por'
        },
        instructor: {
          label: 'Instrutor'
        },
        vehicle: {
          label: 'Veículo'
        },
        vehicleType: {
          label: 'Tipo de veículo'
        },
        result: {
          label: 'Resultado'
        },
        status: {
          label: 'Status',
          options: {
            0: 'Todos'
          }  
        },
      },
      messages: {
        notFound: 'Nenhum registro encontrado',
        error: 'Ocorreu um erro ao consultar os dados'
      }
    },

    userAction: {
      title: {
        list: 'Ações de usuários',
      },
      tooltip: {
        arguments: 'Parâmetros'
      },
      buttons: {
        consult: 'Consultar',
        close: 'Fechar'
      },
      h3: {
        accesses: 'Acessos',
        userActions: 'Ações de usuários'
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.'
      },
      fields: {
        // filter: 'Filtrar',
        companyId: {
          label: 'Empresa',
          errors: {
          }
        },
        userId: {
          label: 'Usuário',
          errors: {
            noUsers: 'Não existem usuários cadastrados nessa empresa.'
          }
        },
        initialDate: {
          label: 'Data inicial',
          errors: {
          }
        },
        finalDate: {
          label: 'Data final',
          errors: {
            bigger: 'A data de final deve ser maior que a data inicial.'
          }
        },
        date: {
          label: 'Data',
        },
        ip: {
          label: 'IP',
        },
        action: {
          label: 'Ação',
        },
        arguments: {
          label: 'Parâmetros',
        },
      },
      modal: {
        title: {
          list: 'Parâmetros'
        },
        fields: {
          colName: {
            label: 'Campo'
          },
          colValue: {
            label: 'Valor'
          }
        },
        buttons: {
          close: 'Fechar'
        },
      }
    },

    lesson: {
      title: {
        list: 'Agendamento de aulas em Simulador',
        detailBiometries: 'Biometrias',
        detailPhotos: 'Fotos',
        detailRequest: 'Requisição',
        detailResponse: 'Resultado',
        tab1: 'Aulas em Simulador',
        tab2: 'Aulas Práticas'
      },
      h3: {
        photos: 'Fotos',
        biometries: 'Biometrias'
      },
      tooltip: {
        biometries: 'Biometrias',
        photos: 'Fotos',
        requests: 'Requisições',
        results: 'Resultados'
      },
      buttons: {
        consult: 'Consultar',
        cancel: 'Cancelar',
        close: 'Fechar'
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.',
        noPhotos: 'Não existem fotos para esta aula.',
        noBiometry: 'Sem dados de biometria.'
      },
      fields: {
        // filter: 'Filtrar',
        companyId: {
          label: {
            consultBy: 'Consultar por',
            drivingSchool: 'CFC',
            sharedUnit: 'Centro Compartilhado'
          },
          errors: {
          }
        },
        simulatorId: {
          label: 'Simulador',
          options: {
            0: 'Todos os simuladores'
          },
          errors: {
          }
        },
        studentName: {
          label: 'Aluno',
          errors: {
          }
        },
        studentCpf: {
          label: 'CPF',
          errors: {
            cpf: 'Por favor digite um cpf válido.'
          }
        },
        initialDate: {
          label: 'Data inicial',
          errors: {
            // required: 'A data de término não pode ficar vazia.',
          }
        },
        finalDate: {
          label: 'Data final',
          errors: {
            // required: 'A data de término não pode ficar vazia.',
            bigger: 'A data de final deve ser maior que a data inicial.'
          }
        },
        status: {
          label: 'Status',
          options: {
            0: 'Todos'
          },
          errors: {
            // required: 'O valor hora/aula não pode ficar vazio.',
            // maxlength: 'O código não pode ter mais que 17 caracteres.',
          }
        },
        date: {
          label: 'Data Agendada',
          errors: {
          }
        },
        artifacts: {
          label: 'Artefatos',
          errors: {
          }
        },
      },
      modal: {
      }
    },

    incomes: {
      title: {
        list: 'Faturamento',
      },
      buttons: {
        consult: 'Consultar',
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.'
      },
      fields: {
        initialDate: {
          label: 'Data inicial',
          errors: {
          }
        },
        finalDate: {
          label: 'Data final',
          errors: {
            bigger: 'A data de final deve ser maior que a data inicial.'
          }
        },
        cfc: {
          label: 'CFC',
        },
        income: {
          label: 'Receita',
        },
      },
    },

    creditEntry: {
      title: {
        list: 'Extrato de caixa',
      },
      buttons: {
        consult: 'Consultar',
      },
      messages: {
        error: 'Ocorreu um erro no sistema',
        notFound: 'Nenhum dado encontrado.'
      },
      fields: {
        initialTimestamp: {
          label: 'Data inicial',
          errors: {
          }
        },
        finalTimestamp: {
          label: 'Data final',
          errors: {
            bigger: 'A data de final deve ser maior que a data inicial.'
          }
        },
        previousCashBalance: {
          label: 'Saldo Anterior'
        },
        finalCashBalance: {
          label: 'Saldo Final'
        },
        date: {
          label: 'Data',
        },
        description: {
          label: 'Descrição',
          options: {
            1: 'Débito',
            2: 'Crédito'
          }
        },
        document: {
          label: 'Documento',
        },
        value: {
          label: 'Valor',
        },
      },
      modal: {
      }
    }

  }

};

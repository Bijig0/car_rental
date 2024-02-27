import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from 'react-accessible-accordion';

import * as React from 'react'
import { useState } from 'react';
import faqList from './faqList';

type SingleAccordionProps = {
  title: string,
  text: string,
  isExpanded: boolean
}

const createUUID = (title: string):string => title.replaceAll(" ","")

const SingleAccordion = (props: SingleAccordionProps) => {
  const { title, text, isExpanded } = props
  const uuid = createUUID(title)
  console.log({uuid, isExpanded})
  return (
<AccordionItem uuid={uuid} key={title} className="accordion-item">
                              <AccordionItemHeading className={`accordion-header`}>
                                <AccordionItemButton
                                  className={`accordion-button ${isExpanded ? undefined : "collapsed"}`}
                                  >{title}</AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel
                                className="accordion-collapse collapse show"
                                id="ac_1"
                                data-bs-parent="#accordion_1"
                              >
                                <div className="accordion-body">
                                  <p>
                                    {text}
                                  </p>
                                </div>
                              </AccordionItemPanel>
                            </AccordionItem>
  )
}

const FAQ = () => {
  const faqFirstHalf = faqList.slice(0, 3)
  const faqSecondHalf = faqList.slice(3)
  const [expandedTitles, setExpandedTitles] = useState<string[]>([])
  console.log({ expandedTitles })
    return (
         <div className="faq-section pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div className="at-section-title text-center">
                  <span className="at-subtitle position-relative text-primary lead"
                            >FAQs
                            </span>
                  <h2 className="h1 mb-0 mt-2">Frequently Asked Questions</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="faq-tabs mt-5 brands-filter">
                  <div className="tab-content mt-60">
                    <div className="tab-pane fade show active" id="general">
                      <div className="row g-4">
                        <div className="col-xl-6">
                        <Accordion allowZeroExpanded
                          onChange={(expanded: string[]) => {
                            const expandedAsUUID = expanded.map((each) => createUUID(each))
                            setExpandedTitles(expandedAsUUID)
                          }}
                            className="accordion theme-accordion"
                            id="accordion_1"
                                            >
                        {
                            faqFirstHalf.map(({ title, text }) => {
                              console.log({ title, text })
                              const isExpanded = expandedTitles.includes(createUUID(title))
                          return (<SingleAccordion isExpanded={isExpanded} title={title} text={text} />)
                            })
                                                }
                          </Accordion>
                        </div>
                        <div className="col-xl-6">
                        <Accordion allowZeroExpanded
                             onChange={(expanded: string[]) => {
                            const expandedAsUUID = expanded.map((each) => createUUID(each))
                            setExpandedTitles(expandedAsUUID)
                          }}
                            className="accordion theme-accordion"
                            id="accordion_1"
                                            >
                        {
                            faqSecondHalf.map(({ title, text }) => {
                              const isExpanded = expandedTitles.includes(createUUID(title))
                            return (
                              <SingleAccordion isExpanded={isExpanded} title={title} text={text} />
                                                        )
                                                    })
                                                }
                          </Accordion>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="features">
                      <div className="row g-4">
                        <div className="col-xl-6">
                          <div
                            className="accordion theme-accordion"
                            id="accordion_3"
                          >
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#accc_1"
                                  className="accordion-button"
                                  data-bs-toggle="collapse"
                                  >01 How long does it take to inspect your car?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse show"
                                id="accc_1"
                                data-bs-parent="#accordion_3"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#accc_2"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >02 Will dealers let you take car mechanic?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="accc_2"
                                data-bs-parent="#accordion_3"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#accc_3"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >03 How long does it take a mechanic to
                                  inspect a used car?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="accc_3"
                                data-bs-parent="#accordion_3"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#accc_4"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >04 How long does it take a mechanic to
                                  inspect a used car?
                                  </a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="accc_4"
                                data-bs-parent="#accordion_3"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div
                            className="accordion theme-accordion"
                            id="accordion_4"
                          >
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a4_1"
                                  className="accordion-button"
                                  data-bs-toggle="collapse"
                                                        >01 How long does it take to inspect your car?
                                                        </a>
                              </div>
                              <div
                                className="accordion-collapse collapse show"
                                id="a4_1"
                                data-bs-parent="#accordion_4"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a4_2"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                                        >02 Will dealers let you take car mechanic?
                                                        </a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a4_2"
                                data-bs-parent="#accordion_4"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a4_3"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >03 How long does it take a mechanic to
                                                            inspect a used car?
                                                        </a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a4_3"
                                data-bs-parent="#accordion_4"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a4_4"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >04 How long does it take a mechanic to
                                                            inspect a used car?
                                                        </a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a4_4"
                                data-bs-parent="#accordion_4"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="technical">
                      <div className="row g-4">
                        <div className="col-xl-6">
                          <div
                            className="accordion theme-accordion"
                            id="accordion_5"
                          >
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a5_1"
                                  className="accordion-button"
                                  data-bs-toggle="collapse"
                                  >01 How long does it take to inspect your car?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse show"
                                id="a5_1"
                                data-bs-parent="#accordion_5"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a5_2"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >02 Will dealers let you take car mechanic?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a5_2"
                                data-bs-parent="#accordion_5"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a5_3"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >03 How long does it take a mechanic to
                                                            inspect a used car?
                                                        </a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a5_3"
                                data-bs-parent="#accordion_5"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a5_4"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >04 How long does it take a mechanic to
                                  inspect a used car?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a5_4"
                                data-bs-parent="#accordion_5"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div
                            className="accordion theme-accordion"
                            id="accordion_6"
                          >
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a6_1"
                                  className="accordion-button"
                                  data-bs-toggle="collapse"
                                  >01 How long does it take to inspect your car?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse show"
                                id="a6_1"
                                data-bs-parent="#accordion_6"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a6_2"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >02 Will dealers let you take car mechanic?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a6_2"
                                data-bs-parent="#accordion_6"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a6_3"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >03 How long does it take a mechanic to
                                  inspect a used car?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a6_3"
                                data-bs-parent="#accordion_6"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div className="accordion-header">
                                <a
                                  href="#a6_4"
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  >04 How long does it take a mechanic to
                                  inspect a used car?</a>
                              </div>
                              <div
                                className="accordion-collapse collapse"
                                id="a6_4"
                                data-bs-parent="#accordion_6"
                              >
                                <div className="accordion-body">
                                  <p>
                                    Dynamically reintermediate virtual
                                    functionalities for bandwidth. Uniquely
                                    expedite cooperative strategic theme areas
                                    and sticky e-markets. Holisticly synergize
                                    alternative metrics for multifunctional
                                    outsourcing without ubiquitous total
                                    linkage.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <a href="/contact" className="btn btn-secondary"
                                ><span className="me-2"><i className="flaticon-chat"></i>
                                    </span>Have an unanswered question?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default FAQ